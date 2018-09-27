import React from "react"
import styled from "styled-components"

const Model = ({ name, price }) => (
  <Item>
    <Heading>{name}</Heading>
    <p>{price}</p>
  </Item>
)

const Item = styled.li`
  text-align: center;
`

const Heading = styled.h3``

export default Model
