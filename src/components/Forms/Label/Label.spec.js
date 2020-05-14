import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Label from "./Label"
import { render, screen } from "@testing-library/react"

describe("Label", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Label>This is a label</Label>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Label />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Renderer", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Label data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
