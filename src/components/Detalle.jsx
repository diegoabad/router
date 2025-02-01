import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Detalle = ({ setError }) => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersonaje(data);
      })
      .catch((error) => {
        setError('Error en la api de db');
        navigate('/error');
      });
  }, [id]);

  return (
    <div>
      <div>
        {id != 1 && <Link to={`/db/${parseInt(id) - 1}`}>Anterior</Link>}
        <Link to={`/db/${parseInt(id) + 1}`}>Siguiente</Link>
      </div>
      <h1>{personaje.name}</h1>
      <p>{personaje.description}</p>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default Detalle;
