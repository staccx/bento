import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import Legend from "./Legend"

describe("Legend", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Legend>This is a legend</Legend>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Legend />
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
        <Legend>This is a legend</Legend>
      </ThemeProvider>
    )
    expect(screen.getByText("This is a legend")).toBeInTheDocument()
  })
})
