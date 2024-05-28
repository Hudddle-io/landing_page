import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Waitlist from './pages/Waitlist';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Waitlist />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;