import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="card">
        <h3>Turnos activos</h3>
        <p>12</p>
      </div>

      <div className="card">
        <h3>Tiempo promedio</h3>
        <p>8 min</p>
      </div>

      <div className="card">
        <h3>Operadores activos</h3>
        <p>5</p>
      </div>

    </div>
  );
}