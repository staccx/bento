import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { Heading, Wrapper } from "@staccx/base"
import FullWidth from "../components/FullWidth/FullWidth"

const FourOFour = () => (
  <Container>
    <FullWidth>
      <Outer>
        <div>
          <Wrapper>
            <ErrorCode>404</ErrorCode>
            <Message>Sorry, something went wrong.</Message>
          </Wrapper>
        </div>
      </Outer>
    </FullWidth>
  </Container>
)

const Container = styled.div`
  margin-top: -82px;
`

const Outer = styled.div`
  min-height: 100vh;
  padding: ${spacing("grid")} 0;
  background-color: ${color.primary};
  color: ${color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorCode = styled(Heading)`
  font-size: 15vw;
  color: ${color.white};
`

const Message = styled(Heading)`
  font-size: 5vw;
  color: ${color.white};
`

export default FourOFour
