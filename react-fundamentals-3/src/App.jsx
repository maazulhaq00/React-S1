
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import MUI from './pages/MUI';
import DrawerAppBar from './components/ResponsiveAppBar';





function App() {
  return (<>
    <Router>
      {/* <NavBar /> */}
      <DrawerAppBar />
      <Routes>
        {/* <Route path='/' element={<h1>Hello</h1>} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Login />} />
        <Route path='/mui' element={<MUI />} />
        <Route path='/welcome/:username' element={<Welcome />} />

        <Route path='*' element={<NotFound />} />


      </Routes>
    </Router>


  </>);
}

export default App;