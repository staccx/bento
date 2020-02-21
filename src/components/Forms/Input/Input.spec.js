import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Input from "./Input"

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input label="Input" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("PlaceHolder", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input
              label="Secret question"
              placeholder="Your favourite animal"
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Disabled", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input label="Input" disabled />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
