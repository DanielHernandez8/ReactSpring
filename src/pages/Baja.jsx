import { useState } from "react";
import { deletePerson } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/baja.css'; // Importa el archivo de estilos

const Baja = () => {
  const [id, setId] = useState();

  const handleDetele=()=>{
    deletePerson(id)
    setId("");
  };

  return (
    <div className="baja-container">
      <input type="text" onChange={e => setId(e.target.value)} value={id} placeholder="Escribe el ID" />
      <button onClick={handleDetele}>Eliminar</button>
      <br />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Baja;
