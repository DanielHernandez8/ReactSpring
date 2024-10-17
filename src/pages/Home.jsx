import { Link } from "react-router-dom";
import '../styles/homepage.css'; // Importa el archivo CSS

const Home = () =>{


  return(
    <div className="container">
      <h3><Link to={"/Consulta"} className="link">Consulta</Link>    <Link to={"/Alta"} className="link">Alta</Link>    <Link to={"/Baja"} className="link">Baja</Link></h3>
    </div>
  )

}
export default Home;