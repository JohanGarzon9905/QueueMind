import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/navbar.css";
import logo from "../images/LogoQueuMind.png";

export default function Navbar() {
  const { logout, user } = useAuth0();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-left">
        <img src={logo} alt="QueueMind" className="logo" />
        <span>QueueMind</span>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Usuarios</Link>
        <Link to="/turns">Turnos</Link>
      </div>

      <div className="nav-user" onClick={() => setOpen(!open)}>
        <span className="user-name">{user?.name}</span>

        {open && (
          <div className="dropdown">
            <button
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin }
                })
              }
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>

    </nav>
  );
}