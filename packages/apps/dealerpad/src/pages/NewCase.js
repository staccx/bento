import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Heading, Box, Wrapper, List, Flag, LayoutItem } from "@staccx/base"
import { spacing, ThemeComponent, color } from "@staccx/theme"
import registerCase from "../data/registerCase"

const Home = () => (
  <React.Fragment>
    <Box variant="defaultHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <Heading level={1} variant="salesOverviewHeading">
            Opprett ny sak
          </Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="subtle">
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
          <img src="/alfa1.png" alt="" />
        </Center>
      </Grid>
    </Box>
  </React.Fragment>
)

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 200px 1fr;
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
  > ul {
    padding-left: ${spacing.medium};
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
  }
`

export default Home
