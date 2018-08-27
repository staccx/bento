import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "@staccx/base"

const Services = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Layout paddingTop="grid" rowGap="grid">
        <ul>
          <li>
            <Link to="/services/core">Core banking</Link>

            {match.params.filter === "infrastructure" && (
              <h2>Infrastructure</h2>
            )}
            {match.params.filter === "innovation" && <h2>Innovation</h2>}
            {match.params.filter === "ux" && <h2>UX</h2>}
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export default Services
