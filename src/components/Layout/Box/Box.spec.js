import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Box from "./Box"

const Child = () => <p>Body</p>

describe("Box", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Box>
              <Child />
            </Box>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid Size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Box size={100}>
              <Child />
            </Box>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Box size="huge">
              <Child />
            </Box>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
