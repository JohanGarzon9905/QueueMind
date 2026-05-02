import { useAuth0 } from "@auth0/auth0-react";
import "../styles/login.css";
import logo from "../images/LogoQueuMind.png";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: { prompt: "login", audience: "https://queuemind-api", },
      appState: { returnTo: "/dashboard" }
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <img src={logo} alt="QueueMind" className="logo" />

        <h1>QueueMind</h1>
        <p>Orquestación inteligente de flujos humanos</p>

        <button onClick={handleLogin}>
          Iniciar sesión
        </button>

      </div>
    </div>
  );
}