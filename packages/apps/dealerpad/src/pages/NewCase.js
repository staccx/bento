import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Heading, Box, Wrapper, List, Flag, LayoutItem } from "@staccx/base"
import { spacing, ThemeComponent, color, targetSize } from "@staccx/theme"
import registerCase from "../data/registerCase"

const Home = () => (
  <PageWrapper>
    <Box variant="newsHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <Heading level={1} variant="salesOverviewHeading">
            Opprett ny sak
          </Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="newCase">
      <Grid>
        <List>
          {registerCase.map((item, index) => (
            <li key={item.label}>
              <LayoutItem variant="fadeIn" delay={(index + 1) * 100 + 300}>
                <StyledLink to={item.path}>
                  <Flag small img={<ThemeComponent tagName={item.icon} />}>
                    {item.label}
                  </Flag>
                </StyledLink>
              </LayoutItem>
            </li>
          ))}
        </List>
        <Center>
          <img src="/alfa-sak.png" alt="" />
        </Center>
      </Grid>
    </Box>
  </PageWrapper>
)

const PageWrapper = styled.div`
  display: grid;
  height: calc(100vh - 52px);
  grid-template-rows: auto 1fr;
`

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 200px 1fr;
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
  > ul {
    padding-left: ${spacing.medium};
  }
  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    li {
      display: inline-block;
      margin-right: ${spacing.medium};
    }
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-align: left;
  display: block;
  padding: ${spacing.small} 0;
  border-bottom: 1px solid ${color.line};
  svg {
    width: ${spacing.medium};
    fill: ${color.primary};
    height: ${spacing.medium};
  }
  @media only screen and (max-width: 760px) {
    border-bottom: 0px transparent solid;
    height: ${targetSize.normal};
  }
`

export default Home
