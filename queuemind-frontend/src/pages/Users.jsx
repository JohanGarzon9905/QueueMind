import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getTurns, createTurn } from "../api/turnsApi";

export default function Turns() {
  const { getAccessTokenSilently } = useAuth0();
  const [turns, setTurns] = useState([]);

  const loadTurns = async () => {
    const token = await getAccessTokenSilently();
    const data = await getTurns(token);
    setTurns(data);
  };

  const handleCreate = async () => {
    const token = await getAccessTokenSilently();
    await createTurn(
      {
        idUser: 1,
        idService: 1
      },
      token
    );
    loadTurns();
  };

  useEffect(() => {
    loadTurns();
  }, []);

  return (
    <div>
      <h2>Turnos</h2>

      <button onClick={handleCreate}>
        Crear turno
      </button>

      {turns.map(t => (
        <p key={t.idTurn}>
          Turno #{t.idTurn} - {t.status}
        </p>
      ))}
    </div>
  );
}