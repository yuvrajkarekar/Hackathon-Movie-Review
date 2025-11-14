//import { useState } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import AuthProvider from './providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './providers/ThemeProvider'
import Register from './pages/Register/Register'
import Movie from './pages/Movie/Movie'
import CreateReview from './pages/CreateReview/CreateReview'
import MyReview from './pages/MyReview/MyReview'


function App() {


  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
     <Routes>
            <Route
              path='/'
              element={<Navigate to='/user/login' />}
            />
            <Route
              path='/user/login'
              element={<Login />}
            />
            <Route
              path='register'
              element={<Register />}
            />
            <Route
              path='movie'
              element={<Movie />}
            />
            <Route
              path="/create-review/:id"
              element={<CreateReview />}
            />
            <Route
              path="/my-reviews/"
              element={<MyReview />}
            />
            <Route path="/" element={<Movie />} />
        <Route path="/movies" element={<Movie />} />
        {/* <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/shared-with-me" element={<SharedWithMe />} />
        <Route path="/all-reviews" element={<AllReviews />} /> */}
      </Routes>
       </AuthProvider>
      </ThemeProvider>
      <ToastContainer />

    </div>
  )
}

export default App
