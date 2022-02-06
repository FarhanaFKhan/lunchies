import Layout from "../components/Layout"
import React from "react"
import heroImg from "../assets/hero-img.jpeg"
import styles from "../styles/home.css"

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="signup-form">
          <p>Form comes here</p>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </section>
    </Layout>
  )
}
