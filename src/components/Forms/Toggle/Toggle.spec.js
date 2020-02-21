import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Toggle from "./Toggle"

describe("Toggle", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("disabled", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle disabled />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle group="Group" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("id", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="Group" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("input", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle input="" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("input", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle onChange={e => console.log(e.target.value)} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Toggle", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle className="Toggle" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("defaultChecked", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle defaultChecked />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle>
              <p>hei</p>
            </Toggle>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle
              disabled
              group="Group"
              input=""
              onChange={e => console.log(e.target.value)}
              className="Toggle"
              defaultChecked
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
