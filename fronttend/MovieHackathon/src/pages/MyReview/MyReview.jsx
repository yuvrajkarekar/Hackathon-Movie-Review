import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { getAllReviews } from '../../services/review'
function MyReview() {
  const [reviews, setReview] = useState([])

  useEffect(() => {
    getAllReviews()
      .then(res => setReview(res.data))
      .catch(err => console.error('Error fetching movies:', err))
  }, [])

  return (
    <div>
      <Navbar />
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {reviews.map(review => (
        <div key={review.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
  <h3>{review.title}</h3>
  <p><strong>ID:</strong> {review.id}</p>
  <p><strong>Movie _ ID:</strong> {review.movie_id}</p>
  <p><strong>Review :</strong> {review.review}</p>
  <p><strong>Rating:</strong> {review.rating}</p>
  <p><strong>User_ ID:</strong> {review.user_id}</p>
  <p><strong>Modified :</strong> {review.modified}</p>
  <p><Link to={`/create-review/${review.id}`}>
            <button>Add Review</button>
          </Link></p>
  </div>

      ))}
    </div>
    </div>
  )
}

export default MyReview

