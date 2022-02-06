import Navbar from "./Navbar"
import React from "react"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      <div className="content">{children}</div>

      <footer>
        <p> Farhana F Khan copyright 2022</p>
      </footer>
    </div>
  )
}
