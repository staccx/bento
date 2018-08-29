import React from "react"
import styled from "styled-components"
import { font, spacing } from "@staccx/theme"
import { Heading, Button, Layout } from "@staccx/base"

const Hero = ({ heading, lede, callToAction }) => (
  <div>
    <Layout>
      {heading && (
        <Heading level={1} variant="hero">
          {heading}
        </Heading>
      )}
      {lede && <Lede>{lede}</Lede>}
      {callToAction && (
        <div>
          <Button>{callToAction}</Button>
        </div>
      )}
    </Layout>
  </div>
)

const Lede = styled.p`
  font-size: ${font.h3};
  font-weight: 300;
  line-height: 1.8;
  margin-right: ${spacing.large};
`

export default Hero
