import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Button from "./Button"

const text = "Test"

describe("Button", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button>{text}</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with onClick", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button onClick={() => console.log("Clicked")}>{text}</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button onClick={() => console.log("Clicked")} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
