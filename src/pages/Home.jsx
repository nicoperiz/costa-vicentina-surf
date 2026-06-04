import { useState } from 'react'
import { Link } from 'react-router-dom'
import spotList from '../data/spots'

function Home() {
  const [filtro, setFiltro] = useState('all')
  const [ricerca, setRicerca] = useState('')

  return (
    <div>
      <h1>Costa Vicentina Surf Guide</h1>
      <input 
        type="text"
        placeholder="Cerca uno spot..."
        value={ricerca}
        onChange={(e) => setRicerca(e.target.value)}
      />
      <div>
        <button onClick={() => setFiltro('all')}>Tutti</button>
        <button onClick={() => setFiltro('Beginner')}>Beginner</button>
        <button onClick={() => setFiltro('Intermediate')}>Intermediate</button>
        <button onClick={() => setFiltro('Advanced')}>Advanced</button>
        <button onClick={() => setFiltro('All levels')}>All levels</button>
      </div>
      <div>
        {spotList
          .filter(spot => {
            const matchLivello = filtro === 'all' || spot.level === filtro
            const matchRicerca = spot.name.toLowerCase().includes(ricerca.toLowerCase())
            return matchLivello && matchRicerca
          })
          .map(spot => (
            <div key={spot.name}>
              <Link to={`/spot/${spot.name}`}>
                <h2>{spot.name}</h2>
              </Link>
              <p>{spot.level}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home