import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createReview } from '../../services/review'
import { useNavigate } from 'react-router-dom'

function CreateReview() {
  const [movie_id, setMovieId] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)
  const [modified, setModified] = useState('')

  const navigate = useNavigate()

  const onSave = async() => {
    setModified(new Date)
    if(review.length == 0) {
        toast.warn('Please Enter Review')
    } else if(rating == 0) {
        toast.warn('please Enter Rating')
    }else{
        const response = await createReview(movie_id, review, rating,modified)
        if(response['status'] == 'success') {
            toast.success('successfully added a Property')
            navigate('/movie')
        } else {
            toast.error(response['error'])
        }
    }

  }
  return (
    <div className='container'>
      <h2 className='page-header'>Create review</h2>
      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>Movie ID</label>
          <input
            onChange={(e) => setMovieId(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Review</label>
          <input
            onChange={(e) => setReview(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>Rating</label>
          <input
            onChange={(e) => setRating(e.target.value)}
            type='number'
            className='form-control'
          />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <button
            onClick={onSave}
            className='btn btn-success'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateReview