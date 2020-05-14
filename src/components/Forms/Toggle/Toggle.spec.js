import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import Toggle from "./Toggle"

describe("Toggle", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("disabled", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" disabled />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" group="Group" />
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
            <Toggle id="test" input="" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("input", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" onChange={e => console.log(e.target.value)} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Toggle", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" className="Toggle" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("defaultChecked", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test" defaultChecked />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Toggle id="test">
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
              id="test"
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

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Toggle id="test" data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
