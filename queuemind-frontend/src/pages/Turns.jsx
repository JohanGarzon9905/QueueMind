import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getTurns, createTurn, nextTurn, cancelTurn } from "../api/turnsApi";

export default function Turns() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [turns, setTurns] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTurns = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://queuemind-api"
        }
      });

      const data = await getTurns(token);
      setTurns(data);

    } catch (error) {
      console.error("Error cargando turnos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadTurns();
    }
  }, [isAuthenticated]);

  const handleCreate = async () => {
  try {
    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://queuemind-api"
      }
    });

    await createTurn(
      {
        id_user: 1,
        id_service: 1,
        status : ""
      },
      token
    );

    loadTurns();

  } catch (error) {
    console.error("Error creando turno:", error);
  }
};

  const handleNext = async (id) => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://queuemind-api"
        }
      });

      await nextTurn(id, token);
      loadTurns();

    } catch (error) {
      console.error("Error cambiando estado:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://queuemind-api"
        }
      });

      await cancelTurn(id, token);
      loadTurns();

    } catch (error) {
      console.error("Error cancelando turno:", error);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return { color: "#6b7280", background: "#f3f4f6" };
      case "called":
        return { color: "#1d4ed8", background: "#dbeafe" };
      case "in_attention":
        return { color: "#b45309", background: "#fef3c7" };
      case "finished":
        return { color: "#047857", background: "#d1fae5" };
      case "cancelled":
        return { color: "#b91c1c", background: "#fee2e2" };
      default:
        return { color: "#000", background: "#eee" };
    }
  };

  if (loading) return <p style={{ marginTop: "80px" }}>Cargando turnos...</p>;

  return (
    <div style={{ padding: "2rem", marginTop: "80px" }}>
      <h2>Turnos</h2>
      
      <div style={{ marginBottom: "1rem", display: "flex", gap: "10px" }}>
        <button
          onClick={handleCreate}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Crear turno
        </button>
      </div>

      <div className="card">
        {turns.map(t => (
          <div
            key={t.id_turn}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "10px",
              background: "#111827",
              color: "white"
            }}
          >
            <p>
              <strong>Turno #{t.id_turn}</strong>
            </p>

            <span
              style={{
                ...getStatusStyle(t.status),
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold"
              }}
            >
              {t.status}
            </span>

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleNext(t.id_turn)}
                disabled={t.status === "finished" || t.status === "cancelled"}
                style={{
                  marginRight: "10px",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  background:
                    t.status === "finished" || t.status === "cancelled"
                      ? "#9ca3af"
                      : "#2563eb",
                  color: "white",
                  cursor:
                    t.status === "finished" || t.status === "cancelled"
                      ? "not-allowed"
                      : "pointer"
                }}
              >
                Siguiente
              </button>

              <button
                onClick={() => handleCancel(t.id_turn)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#dc2626",
                  color: "white",
                  cursor: "pointer"
                }}
                disabled={t.status === "finished" || t.status === "cancelled"}
              >
                Cancelar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}