import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Logo from "./Logo"

describe("Logo", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Logo />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Height", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Logo height={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("width", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Logo width={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("brand", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Logo brand="dnb" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
