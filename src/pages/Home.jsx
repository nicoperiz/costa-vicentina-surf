import Header from '../components/Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import spotList from '../data/spots'

function Home() {
  const [filtro, setFiltro] = useState('all')
  const [ricerca, setRicerca] = useState('')

  return (
    <div>
      <Header />
      <div className="page">
        <input
          type="text"
          placeholder="Search a spot..."
          value={ricerca}
          onChange={(e) => setRicerca(e.target.value)}
        />
        <div className="filtri">
          <button className={filtro === 'all' ? 'active' : ''} onClick={() => setFiltro('all')}>All</button>
          <button className={filtro === 'Beginner' ? 'active' : ''} onClick={() => setFiltro('Beginner')}>Beginner</button>
          <button className={filtro === 'Intermediate' ? 'active' : ''} onClick={() => setFiltro('Intermediate')}>Intermediate</button>
          <button className={filtro === 'Advanced' ? 'active' : ''} onClick={() => setFiltro('Advanced')}>Advanced</button>
          <button className={filtro === 'All levels' ? 'active' : ''} onClick={() => setFiltro('All levels')}>All levels</button>
        </div>
        <div>
          {spotList
            .filter(spot => {
              const matchLivello = filtro === 'all' || spot.level === filtro
              const matchRicerca = spot.name.toLowerCase().includes(ricerca.toLowerCase())
              return matchLivello && matchRicerca
            })
            .map(spot => (
              <Link to={`/spot/${spot.name}`} key={spot.name} className="card">
                <h2>{spot.name}</h2>
                <span className={`badge badge-${spot.level}`}>{spot.level}</span>
                <p className="card-sub">{spot.waveType} · {spot.breakType}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home