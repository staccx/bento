import React from "react"
import styled from "styled-components"
import {
  Heading,
  Box,
  Wrapper,
  LayoutItem,
  Button,
  ThemeComponent
} from "@staccx/base"
import { slideLeft } from "../components/transitions/transitions"

const UnderConstruction = ({ history }) => (
  <React.Fragment>
    <Box variant="defaultHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <div>
            <Button
              variant="back"
              onClick={() =>
                history.push({ pathname: "/overview", state: slideLeft })
              }
            >
              <ThemeComponent tagName="Back" /> Oversikt
            </Button>
          </div>
          <Heading level={1} variant="salesOverviewHeading">
            Under arbeid
          </Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="subtle">
      <Wrapper>
        <ImageWrapper>
          <img
            src="https://media.giphy.com/media/EIiJp9cQ3GeEU/giphy.gif"
            alt=""
          />
        </ImageWrapper>
      </Wrapper>
    </Box>
  </React.Fragment>
)
const ImageWrapper = styled.div`
  text-align: center;
`

export default UnderConstruction
