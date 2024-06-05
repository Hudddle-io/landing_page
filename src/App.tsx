import { Route, Routes } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer.tsx";

const App = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <Routes>
                <Route path="/" element={<Waitlist />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
