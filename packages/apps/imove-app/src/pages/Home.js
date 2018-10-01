import React from "react"
import { Link } from "react-router-dom"

const Home = () => (
  <div>
    Hjem <Link to="/onboarding">Onboarding</Link>
    <Link to="/sell">Sell</Link>
  </div>
)

export default Home
