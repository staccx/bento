import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import NationalIdInput from "./NationalIdInput"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Alert", () => {
  describe("Snapshots", () => {
    it("ID", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <NationalIdInput id="test" />
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
        <NationalIdInput id="test" data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
