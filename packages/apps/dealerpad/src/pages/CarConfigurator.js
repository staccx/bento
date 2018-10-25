import React from "react"
import styled from "styled-components"
import {
  Heading,
  Box,
  Wrapper,
  LayoutItem,
  Button,
  Layout,
  ThemeComponent,
  theming
} from "@staccx/base"
import { slideLeft } from "../components/transitions/transitions"

const UnderConstruction = ({ history }) => (
  <PageWrapper>
    <Box variant="carConfigHero">
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
          <Layout rowGap="small" paddingTop="tiny">
            <Heading level={1} variant="carConfiguratorHeading">
              Bilkonfigurator
            </Heading>
            <Heading level={2} variant="carConfiguratorBrand">
              Volvo
            </Heading>
            <div>
              <Button variant="white">Bytt merke</Button>
            </div>
          </Layout>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="subtle">
      <Wrapper>
        <ImageWrapper>
          <img src="/xc.png" alt="" />
          <img src="/v.png" alt="" />
          <img src="/s.png" alt="" />
          <img src="/hybrid.png" alt="" />
        </ImageWrapper>
      </Wrapper>
    </Box>
  </PageWrapper>
)
const ImageWrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-column-gap: ${theming.spacing.medium};
  grid-row-gap: ${theming.spacing.medium};
  margin-top: -${theming.spacing.large};
  @media only screen and (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`

const PageWrapper = styled.div`
  display: grid;
    height: calc(100vh - 52px);
    grid-template-rows: auto 1fr;
}


`

export default UnderConstruction
