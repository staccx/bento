import React from "react"
import styled from "styled-components"
import { Layout, ThemeComponent, Box } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"
import Page from "../Page/Page"

const PatternContainer = ({ children }) => {
  return (
    <FullWidth>
      <Container>
        <ThemeComponent tagName={"DotsPattern"} />
      </Container>
      <Page>
        <Layout paddingTop={"gridSmall"} paddingBottom={"gridSmall"}>
          <Box variant={"white"}>{children}</Box>
        </Layout>
      </Page>
    </FullWidth>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default PatternContainer
