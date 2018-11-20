import React from "react"
import { Link } from "react-router-dom"
import { Layout, Box, Heading, Text, Anchor } from "@staccx/base"

const Tiles = ({ tiles }) => (
  <Layout variant="docForm" paddingTop="large">
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
)

export default Tiles
