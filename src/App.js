import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Sign from './components/Sign';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
