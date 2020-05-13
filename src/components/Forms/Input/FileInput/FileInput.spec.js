import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import FileInput from "./FileInput"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

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

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <FileInput id="test" data-testid="testID">
          <Child />
        </FileInput>
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
