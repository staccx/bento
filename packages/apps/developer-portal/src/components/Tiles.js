import React from "react"
import { Link } from "react-router-dom"
import { Layout, Box, Heading, Text, Wrapper, Anchor } from "@staccx/base"
import styled from "styled-components"

const Tiles = ({ tiles }) => (
  <div>
    <Layout paddingTop="large">
      <LeftWrapper size="medium">
        <Layout variant="form" paddingTop="medium">
          {tiles &&
            tiles.map(tile => (
              <Anchor to={tile.to || "#"} key={tile._key} as={Link}>
                <Box variant="documentationShortcut">
                  <Heading level={2} variant="documentationShortcutHeading">
                    {tile.heading}
                  </Heading>
                  <Text> {tile.text}</Text>
                </Box>
              </Anchor>
            ))}
        </Layout>
      </LeftWrapper>
    </Layout>
  </div>
)

const LeftWrapper = styled(Wrapper)`
  margin-left: 0;
  padding: 0;
`

const onAttention = `&:hover, &:focus, &:active`

const BoxLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.2s ease;

  ${onAttention} {
    transform: translateY(-3px);
  }
`

export default Tiles
