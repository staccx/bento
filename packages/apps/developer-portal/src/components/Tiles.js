import React from "react"
import { Link } from "react-router-dom"
import { Layout, Box, Heading, Text, Wrapper, Anchor } from "@staccx/base"
import styled from "styled-components"

const Tiles = ({ tiles }) => (
  <div>
    <Layout paddingTop="large">
      <LeftWrapper size="medium">
        <Layout variant="docForm" paddingTop="medium">
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
  padding: 0;
`
export default Tiles
