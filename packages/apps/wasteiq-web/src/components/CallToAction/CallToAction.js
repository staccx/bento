import React from "react"
import styled from "styled-components"
import {
  Box,
  Heading,
  Paragraph,
  Layout,
  ThemeComponent,
  Button
} from "@staccx/base"
import FeaturesList from "../Features/Features.List"

const CallToAction = ({ color, icon, iconColor }) => {
  return (
    <Box color={color} as={"article"} size={"medium"}>
      <Layout>
        <header>
          <Layout>
            <Heading level={2}>
              Want to become part of WasteIQ ecosystem?
            </Heading>
            <Paragraph>
              To solve the systemic waste challenge we need to work together in
              the value chain, and support open standards. We currently run
              pilot projects with several waste management companies.{" "}
            </Paragraph>
            <div>
              <Button color={"blueLight"}>
                Become a part of the Waste IQ ecosystem!
              </Button>
            </div>
          </Layout>
        </header>
        <Body>
          <IconContainer>
            <ThemeComponent tagName={icon} color={iconColor} autoWidth />
          </IconContainer>
          <div>
            <FeaturesList />
          </div>
        </Body>
      </Layout>
    </Box>
  )
}

const Body = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  > div:last-child {
    flex-basis: 60%;
  }
`

const IconContainer = styled.div`
  max-height: 25vh;
`

export default CallToAction
