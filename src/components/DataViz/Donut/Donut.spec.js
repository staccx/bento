import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import "@testing-library/jest-dom"
import Donut from "./Donut"

describe("Donut", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Donut />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Progress", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Donut progress={0.9} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Progress&WarningTreshold", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Donut progress={0.7} warningThreshold={0.4} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  it("Progress over 1", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <Donut progress={1.2} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("Progress under 1", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <Donut progress={-0.9} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("invalid progress", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <Donut progress={null} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("With children", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <Donut progress={0.9}>
            <p>whyy?</p>
          </Donut>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe("Rendering", () => {
    it("Should render donut", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Donut progress={0.8} />
        </ThemeProvider>
      )
      expect(screen.getByText("80%")).toBeInTheDocument()
    })
  })
})
