import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Heading, Box, Wrapper, List, Portal, LayoutItem } from "@staccx/base"
import { spacing } from "@staccx/theme"
import registerCase from "../data/registerCase"

const Home = () => (
  <React.Fragment>
    <Box variant="defaultHero">
      <Wrapper>
        <LayoutItem variant="fadeIn" delay={400}>
          <Heading level={1}>Opprett ny sak</Heading>
        </LayoutItem>
      </Wrapper>
    </Box>
    <Box variant="subtle">
      <Wrapper>
        <Grid>
          {registerCase.map((item, index) => (
            <li key={item.label}>
              <LayoutItem variant="fadeIn" delay={(index + 1) * 100 + 300}>
                <Link to={item.path}>
                  <Portal tagName={item.icon} label={item.label} />
                </Link>
              </LayoutItem>
            </li>
          ))}
        </Grid>
      </Wrapper>
    </Box>
  </React.Fragment>
)

const Grid = styled(List)`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
`

export default Home
