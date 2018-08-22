import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "@staccx/base"

const Services = () => (
  <div>
    <Layout paddingTop="grid" rowGap="grid">
      <ul>
        <li>
          <Link to="services/core">Core banking</Link>
        </li>
      </ul>
    </Layout>
  </div>
)

export default Services
