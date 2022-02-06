import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Lunchies</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">Our Story</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/">Testimonials</Link>
      </div>
    </nav>
  )
}
