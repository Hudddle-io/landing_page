import { Route, Routes } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Register from "./pages/Register";
import { Playground } from "./pages/Playground";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <Routes>
                <Route path="/" element={<Waitlist />} />
                <Route path="/register" element={<Register />} />
                <Route path="/play" element={<Playground />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
