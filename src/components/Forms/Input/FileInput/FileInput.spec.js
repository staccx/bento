import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import FileInput from "./FileInput"

const Child = () => <p>Body</p>

describe("FileInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FileInput />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FileInput>
              <Child />
            </FileInput>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("child and ID", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <FileInput id="test">
              <Child />
            </FileInput>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
