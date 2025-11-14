import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/movie">MovieReviews</Link></li> {/* Home */}
        <li><Link to="/movie">All Movies</Link></li>
        <li><Link to="/my-reviews">My Reviews</Link></li>
        <li><Link to="/shared-with-me">Shared With Me</Link></li>
        <li><Link to="/all-reviews">All Reviews</Link></li>
        <li className="rnav-list"><Link to="/edit-profile">Edit Profile</Link></li>
        <li className="rnav-list"><Link to="/change-password">Change Password</Link></li>
        <li className="rnav-list"><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
