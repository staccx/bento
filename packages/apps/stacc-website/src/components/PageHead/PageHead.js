import React from "react"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { spacing } from "@staccx/theme"

const PageHead = ({ heading, lede, illustration }) => (
  <Container>
    <Layout>
      <Heading level={1}>{heading}</Heading>
      <Body>
        <div>{lede}</div>
        <div>
          <img src={illustration} alt="" />
        </div>
      </Body>
    </Layout>
  </Container>
)

const Container = styled.header`
  margin-bottom: ${spacing("grid")};
`

const Body = styled.div`
  display: flex;
`

export default PageHead
