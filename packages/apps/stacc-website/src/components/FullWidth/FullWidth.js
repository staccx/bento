import React from "react"
import styled from "styled-components"

const FullWidth = ({ children, className }) => (
  <Container className={className}>{children}</Container>
)

const Container = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export default FullWidth
