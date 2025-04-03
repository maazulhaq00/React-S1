import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./pages/Home";
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return ( <>

  <Router>
    
    <nav>
      <Link to="/" >Home</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/services">Ours Services</Link>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />

    </Routes>
  </Router>

  </>  );
}

export default App;