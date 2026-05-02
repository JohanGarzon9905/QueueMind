import { useAuth0 } from "@auth0/auth0-react";

export default function AuthGate({ children }) {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1E4D6B",
        color: "white"
      }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return children;
}