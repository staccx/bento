import React from "react"
import styled from "styled-components"
import {
  Box,
  Heading,
  Paragraph,
  Layout,
  ThemeComponent,
  Button,
  theming
} from "@staccx/base"
import FeaturesList from "../Features/Features.List"

const CallToAction = ({ color, icon, iconColor }) => {
  return (
    <Box
      color={color}
      as={"article"}
      size={"medium"}
      variant={[theming.VARIANT_DEFAULT, "story"]}
    >
      <Layout rowGap={"large"}>
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
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    display: flex;
    justify-content: space-between;

    > div:last-child {
      flex-basis: 75%;
    }
  }
`

const IconContainer = styled.div`
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    max-height: 25vh;
    min-height: 240px;
    align-self: flex-end;

    > * {
      position: absolute;
      bottom: 0;
      left: -${theming.spacing.large};
    }
  }

  @media (max-width: ${theming.wrapper("medium")}) {
    > * {
      position: absolute;
      max-height: 23vh;
      bottom: 0;
      left: 0;
    }
  }
`

export default CallToAction
