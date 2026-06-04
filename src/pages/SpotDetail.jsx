import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import spotList from '../data/spots'

function SpotDetail() {
  const { nome } = useParams()
  const spot = spotList.find(s => s.name === nome)

  return (
    <div>
      <Link to="/">← Torna alla lista</Link>
      <h1>{spot.name}</h1>
      <p><strong>Livello:</strong> {spot.level}</p>
      <p><strong>Onda:</strong> {spot.waveType}</p>
      <p><strong>Break:</strong> {spot.breakType}</p>
      <p><strong>Marea:</strong> {spot.tide}</p>
      <p><strong>Note:</strong> {spot.notes}</p>
    </div>
  )
}

export default SpotDetail