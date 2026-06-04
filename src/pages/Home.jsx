import { useState } from "react";
import { Link } from "react-router-dom";
import spotList from "../data/spots";

function Home() {
  const [filtro, setFiltro] = useState("all");
  return (
    <div>
      <h1>Costa Vicentina Surf Guide</h1>
      <div>
        <div>
          <button onClick={() => setFiltro("all")}>Tutti</button>
          <button onClick={() => setFiltro("Beginner")}>Beginner</button>
          <button onClick={() => setFiltro("Intermediate")}>
            Intermediate
          </button>
          <button onClick={() => setFiltro("Advanced")}>Advanced</button>
          <button onClick={() => setFiltro("All levels")}>All levels</button>
        </div>
        {spotList
          .filter((spot) => filtro === "all" || spot.level === filtro)
          .map((spot) => (
            <div key={spot.name}>
              <Link to={`/spot/${spot.name}`}>
                <h2>{spot.name}</h2>
              </Link>
              <p>{spot.level}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
