import { Route, Routes } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Register from "./pages/Register";

const App = () => {
    return (
        <div className="scroll-smooth relative bg-[#FDFCFC]">
            <Routes>
                <Route path="/" element={<Waitlist />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
