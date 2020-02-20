import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Odometer from "./Odometer"

describe("Odometer", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Number", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer number={10000} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("seperator steps", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer number={100000} separatorSteps={5} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer number={100000} separatorSteps={5} size={80} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid number", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer number="100" separatorSteps={5} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid separatorSteps", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Odometer number={100000} separatorSteps="5" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
