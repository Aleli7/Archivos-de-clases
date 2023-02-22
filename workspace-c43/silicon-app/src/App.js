import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './About';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import PersonaGest from './persona/PersonaGest';
import PersonaGrid from './persona/PersonaGrid';
import PersonaList from './persona/PersonaList';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/persona/list" element={<PersonaList />} />
          <Route path="/persona/grid" element={<PersonaGrid />} />
          <Route path="/persona/gest/:dni" element={<PersonaGest />} />
          <Route path="/persona/gest" element={<PersonaGest />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}
  
export default App;
