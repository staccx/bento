import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Heading from "./Heading"

describe("Heading", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 1", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={1}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 2", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={2}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 3", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={3}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 4", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={4}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 5", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={5}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("level 6", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading level={6}>Hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ClassName", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Heading className="test">hei</Heading>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
