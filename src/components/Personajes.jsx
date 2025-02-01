import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Personajes = ({ personajes, setPersonajes }) => {
  useEffect(() => {
    if (personajes.length > 0) return;
    fetch('https://dragonball-api.com/api/characters')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersonajes(data.items);
      });
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <ul>
        {personajes.map((personaje) => {
          return (
            <li key={personaje.id}>
              <Link to={`/db/${personaje.id}`}>{personaje.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Personajes;
