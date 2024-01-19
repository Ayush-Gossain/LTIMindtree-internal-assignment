import react from 'react'
import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
