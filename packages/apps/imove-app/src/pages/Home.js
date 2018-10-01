import React from "react"
import { Link } from "react-router-dom"

const Home = () => (
  <div>
    <ul>
      <li>Hjem</li>
      <li>
        <Link to="/onboarding">Onboarding</Link>
      </li>
      <li>
        <Link to="/sell">Sell</Link>
      </li>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
    </ul>
  </div>
)

export default Home
