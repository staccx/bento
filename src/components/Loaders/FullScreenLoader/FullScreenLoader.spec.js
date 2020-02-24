import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import FullScreenLoader from "./FullScreenLoader"

describe("FullScreenLoader", () => {
  describe("Snapshots", () => {
    it("Messages", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FullScreenLoader messages={["hei"]} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Multiple words", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FullScreenLoader
              messages={["hei", "test", "noe", "et", "navn"]}
              delay={1000}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid Messages", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FullScreenLoader messages="hei" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
