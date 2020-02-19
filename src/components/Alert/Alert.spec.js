import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Alert from "./Alert"

const Child = () => <p>Body</p>

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert>
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Info", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="info">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Warning", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="warning">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Success", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="success">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Invalid type", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type={null}>
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("No children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="warning" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})