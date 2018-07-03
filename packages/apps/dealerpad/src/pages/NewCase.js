import React from "react"
import { ThemeComponent } from "@staccx/theme"
import { Heading, Box, Wrapper, List } from "@staccx/base"
import registerCase from "../data/registerCase"

const Home = () => (
  <React.Fragment>
    <Box variant="defaultHero">
      <Wrapper>
        <Heading level={1}>Opprett ny sak</Heading>
      </Wrapper>
    </Box>
    <Box variant="subtle">
      <Wrapper>
        <List>
          {registerCase.map(item => (
            <a>
              <ThemeComponent tagName={item.icon} /> <span>{item.name}</span>
            </a>
          ))}
        </List>
      </Wrapper>
    </Box>
  </React.Fragment>
)

export default Home
