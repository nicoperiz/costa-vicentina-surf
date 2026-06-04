import { Link } from 'react-router-dom'
import spotList from '../data/spots'

function Home() {
  return (
    <div>
      <h1>Costa Vicentina Surf Guide</h1>
      <div>
        {spotList.map(spot => (
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