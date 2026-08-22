import Header from "../components/Header";
import { useState, useEffect } from "react";
import Mappa from "../components/Mappa";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import spotList from "../data/spots";

function SpotDetail() {
  const { nome } = useParams();
  const spot = spotList.find((s) => s.name === nome);
  const [meteo, setMeteo] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&current=temperature_2m,wind_speed_10m,wave_height`
    )
      .then((r) => r.json())
      .then((dati) => setMeteo(dati.current));
  }, []);

  return (
    <div>
      <Header />
      <div className="page">
        <Link to="/" className="back-link">← Back to list</Link>
        <h1>{spot.name}</h1>
        <span className={`badge badge-${spot.level}`}>{spot.level}</span>
        <div className="detail-card">
          <p><strong>Wave:</strong> {spot.waveType}</p>
          <p><strong>Break:</strong> {spot.breakType}</p>
          <p><strong>Tide:</strong> {spot.tide}</p>
          <p><strong>Notes:</strong> {spot.notes}</p>
          {meteo && (
            <div>
              <p><strong>Temperature:</strong> {meteo.temperature_2m}°C</p>
              <p><strong>Wind:</strong> {meteo.wind_speed_10m} km/h</p>
              {meteo.wave_height !== null && (
                <p><strong>Wave Height:</strong> {meteo.wave_height} m</p>
              )}
            </div>
          )}
        </div>
        <Mappa lat={spot.lat} lon={spot.lon} nome={spot.name} />
      </div>
    </div>
  )
}

export default SpotDetail;