import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import RadioButton from "./RadioButton"

describe("RadioButton", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioButton>RadioButton</RadioButton>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ID", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioButton id="ID">RadioButton</RadioButton>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioButton id="ID" group="ID1">
              RadioButton
            </RadioButton>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <RadioButton id="ID" />
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
        <RadioButton id="ID" group="ID1">
          RadioButton
        </RadioButton>
      </ThemeProvider>
    )
    expect(screen.getByText("RadioButton")).toBeInTheDocument()
  })
})
