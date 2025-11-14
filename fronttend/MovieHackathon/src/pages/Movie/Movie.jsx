import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../services/movies'
import Navbar from '../../components/Navbar/Navbar'


function Movie() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
      .then(res => setMovies(res.data))
      .catch(err => console.error('Error fetching movies:', err))
  }, [])

  return (
    <div>
      <Navbar />
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {movies.map(movie => (
        <div key={movie.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
  <h3>{movie.title}</h3>
  <p><strong>ID:</strong> {movie.id}</p>
  <p><strong>Release:</strong> {new Date(movie.releases).toLocaleDateString()}</p>
  <p><Link to={`/add-review/${movie.id}`}>
            <button>Add Review</button>
          </Link></p>
  </div>

      ))}
    </div>
    </div>
  )
}

export default Movie

