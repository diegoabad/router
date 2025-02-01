import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Error from './Error';
import Personajes from './Personajes';
import Detalle from './Detalle';

const Rutas = ({ setPersonajes, personajes, setError, error }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/db"
        element={
          <Personajes personajes={personajes} setPersonajes={setPersonajes} />
        }
      />
      <Route path="/db/:id" element={<Detalle setError={setError} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error msj={error} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rutas;
