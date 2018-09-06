import React from "react"
import styled from "styled-components"
import { Heading, Box, Wrapper, LayoutItem, Button, Layout } from "@staccx/base"
import { ThemeComponent, spacing } from "@staccx/theme"
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
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
  margin-top: -${spacing.large};
`

const PageWrapper = styled.div`
  display: grid;
    height: calc(100vh - 52px);
    grid-template-rows: auto 1fr;
}


`

export default UnderConstruction
