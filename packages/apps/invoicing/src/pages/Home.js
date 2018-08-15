import React from "react"
import { Wrapper, Button } from "@staccx/base"
import { Link } from "react-router-dom"

const Home = () => (
  <Wrapper>
    <Link to="/create">
      <Button>Lag ny faktura</Button>
    </Link>
  </Wrapper>
)

export default Home
