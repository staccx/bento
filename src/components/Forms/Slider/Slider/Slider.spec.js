import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import Slider from "./Slider"

describe("Slider", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider className="Slider" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("min", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider min={0} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider max={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider step={1} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Slider className="Slider" min={0} max={100} step={1} />
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
        <Slider className="Slider" min={0} max={100} step={1} />
      </ThemeProvider>
    )
    expect(screen.getByRole("slider")).toBeInTheDocument()
  })
})
