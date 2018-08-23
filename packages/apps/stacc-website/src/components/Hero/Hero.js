import React from "react"
import styled from "styled-components"
import { Heading, Button, Layout } from "@staccx/base"
import { spacing } from "@staccx/theme"

const Hero = ({ heading, callToAction }) => (
  <Container>
    <Layout>
      <Heading level={1}>{heading}</Heading>
      <div>
        <Button>{callToAction}</Button>
      </div>
    </Layout>
  </Container>
)

const Container = styled.div`
  margin-bottom: ${spacing("grid")};
`

export default Hero
