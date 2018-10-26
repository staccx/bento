import React from "react"
import { Layout, Wrapper, LayoutItem, ThemeComponent, Box } from "@staccx/base"

const LoggedOut = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Box variant="center">
          <ThemeComponent tagName="IconLoggedOutConfirmation" />
        </Box>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <Box variant="center">Du er nå logget ut</Box>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

export default LoggedOut
