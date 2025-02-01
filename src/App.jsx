import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Rutas from './components/Rutas';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState('');

  return (
    <div>
      <NavBar />
      <Rutas
        setPersonajes={setPersonajes}
        personajes={personajes}
        setError={setError}
        error={error}
      />
    </div>
  );
}

export default App;
