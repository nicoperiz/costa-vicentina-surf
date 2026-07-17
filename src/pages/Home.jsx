import { useState } from "react";
import { Link } from "react-router-dom";
import spotList from "../data/spots";

function Home() {
  const [filtro, setFiltro] = useState("all");
  const [ricerca, setRicerca] = useState("");

  return (
    <div className="page">
      <h1>Costa Vicentina Surf Guide</h1>
      <input
        type="text"
        placeholder="Cerca uno spot..."
        value={ricerca}
        onChange={(e) => setRicerca(e.target.value)}
      />
      <div className="filtri">
        <button
          className={filtro === "all" ? "active" : ""}
          onClick={() => setFiltro("all")}
        >
          Tutti
        </button>
        <button
          className={filtro === "Beginner" ? "active" : ""}
          onClick={() => setFiltro("Beginner")}
        >
          Beginner
        </button>
        <button
          className={filtro === "Intermediate" ? "active" : ""}
          onClick={() => setFiltro("Intermediate")}
        >
          Intermediate
        </button>
        <button
          className={filtro === "Advanced" ? "active" : ""}
          onClick={() => setFiltro("Advanced")}
        >
          Advanced
        </button>
        <button
          className={filtro === "All levels" ? "active" : ""}
          onClick={() => setFiltro("All levels")}
        >
          All levels
        </button>
      </div>
      <div>
        {spotList
          .filter((spot) => {
            const matchLivello = filtro === "all" || spot.level === filtro;
            const matchRicerca = spot.name
              .toLowerCase()
              .includes(ricerca.toLowerCase());
            return matchLivello && matchRicerca;
          })
          .map((spot) => (
            <div key={spot.name} className="card">
              <Link to={`/spot/${spot.name}`}>
                <h2>{spot.name}</h2>
              </Link>
              <span className={`badge badge-${spot.level}`}>{spot.level}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
