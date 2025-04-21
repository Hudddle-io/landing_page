from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime
from contextlib import asynccontextmanager
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import DuplicateKeyError, PyMongoError
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB configuration - with validation
MONGO_DB_URL = os.getenv("MONGO_DB_URL")
if not MONGO_DB_URL:
    raise ValueError("MONGO_DB_URL environment variable not set")

MONGO_DB_NAME = os.getenv("MONGO_DB_NAME")
if not MONGO_DB_NAME:
    raise ValueError("MONGO_DB_NAME environment variable not set")

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Server is starting...")
    # Initialize MongoDB connection
    app.mongodb_client = AsyncIOMotorClient(MONGO_DB_URL)
    app.db = app.mongodb_client[MONGO_DB_NAME]
    
    # Create indexes
    try:
        await app.db.registrations.create_index("email", unique=True)
    except PyMongoError as e:
        print(f"Error creating index: {e}")
        raise
    
    yield
    
    print("Server is stopping...")
    # Close MongoDB connection
    app.mongodb_client.close()

app = FastAPI(lifespan=lifespan)

class RegistrationRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    agree_terms: bool
    agree_marketing: bool

class RegistrationResponse(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    agree_terms: bool
    agree_marketing: bool
    registered_at: datetime

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register/", response_model=RegistrationResponse)
async def register_user(registration: RegistrationRequest):
    if not registration.agree_terms:
        raise HTTPException(
            status_code=400, 
            detail="You must agree to the terms of service to register"
        )

    registration_data = {
        "first_name": registration.first_name,
        "last_name": registration.last_name,
        "email": registration.email,
        "agree_terms": registration.agree_terms,
        "agree_marketing": registration.agree_marketing,
        "registered_at": datetime.utcnow()
    }

    try:
        result = await app.db.registrations.insert_one(registration_data)
        created_registration = await app.db.registrations.find_one({"_id": result.inserted_id})
        if not created_registration:
            raise HTTPException(status_code=500, detail="Failed to retrieve created registration")
        
        return {**created_registration, "id": str(created_registration["_id"])}
    
    except DuplicateKeyError:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    except PyMongoError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )

@app.get("/registrations/", response_model=List[RegistrationResponse])
async def get_registrations():
    try:
        registrations = []
        async for reg in app.db.registrations.find().sort("registered_at", -1):
            registrations.append({**reg, "id": str(reg["_id"])})
        return registrations
    except PyMongoError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Database error: {str(e)}"
        )