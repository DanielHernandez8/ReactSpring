import { useEffect, useState } from 'react';
import {getPersons} from '../services/api';
import {Link} from 'react-router-dom';
import '../styles/consulta.css';
const Consulta = () => {
const [personas, setPersonas] = useState([]);

useEffect(() => {
  getPersons().then(data => {
console.log('11111111',data)
    setPersonas(data.data)
  });
},[]);

  return (
      <div className="consulta-container">
          <h3 className="consulta-title">Lista de Personas</h3>
          <table className="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                  </tr>
              </thead>
              <tbody>
                  {personas.map((persona) => (
                      <tr key={persona.id}>
                          <td>{persona.id}</td>
                          <td>{persona.nombre}</td>
                          <td>{persona.edad}</td>
                      </tr>
                  ))}
              </tbody>
          </table>

          <Link to="/" className="link">Home</Link>
      </div>
  );
};

export default Consulta;