import { useState } from "react";
import { savePersonName } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/alta.css'; // Importa el archivo de estilos

const Alta = () => {
  const [name, setName] = useState();
  const [edad, setEdad] = useState();
  
  return (
    <div className="alta-container">
      <input type="text" onChange={e => setName(e.target.value)} placeholder="Nombre" />
      <input type="text" onChange={e => setEdad(e.target.value)} placeholder="Edad" />
      <button onClick={() => savePersonName({ nombre: name, edad: edad })}>Enviar</button>
      <br />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Alta;
