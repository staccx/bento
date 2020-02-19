import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import ProgressBar from "./ProgressBar"

describe("ProgressBar", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ProgressBar />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Progress", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ProgressBar progress={0.9} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Progress&WarningTreshold", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ProgressBar progress={0.7} warningThreshold={0.4} />
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
          <ProgressBar progress={1.2} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("Progress under 1", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <ProgressBar progress={-0.9} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("invalid progress", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <ProgressBar progress={null} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("With children", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={baseTheme}>
          <ProgressBar progress={0.9}>
            <p>whyy?</p>
          </ProgressBar>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
