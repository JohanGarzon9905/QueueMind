import "../styles/loader.css";
import logo from "../images/LogoQueuMind.png";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        
        <img src={logo} alt="QueueMind" className="logo" />

        <div className="spinner"></div>

        <p>Cargando QueueMind...</p>

      </div>
    </div>
  );
}