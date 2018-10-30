import React from "react"
import styled from "styled-components"
import { Layout, Box, Heading, ThemeComponent } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"
import Page from "../Page/Page"

const Features = () => {
  return (
    <FullWidth>
      <PatternContainer>
        <ThemeComponent tagName={"DotsPattern"} />
      </PatternContainer>
      <Page>
        <Layout paddingTop={"gridSmall"} paddingBottom={"gridSmall"}>
          <Box variant={"white"}>
            <Layout>
              <Heading variant="section" level={2}>
                Features
              </Heading>
              <p>Features go here</p>
            </Layout>
          </Box>
        </Layout>
      </Page>
    </FullWidth>
  )
}

const PatternContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default Features
