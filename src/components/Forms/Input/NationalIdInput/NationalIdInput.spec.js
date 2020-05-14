import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import NationalIdInput from "./NationalIdInput"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

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
  it("Should render and accept 11 digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <NationalIdInput id="test" data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "00000000000")
    expect(input.value).toBe("000000·00000")
  })
  it("Should only accept 11 digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <NationalIdInput id="test" data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "0000000000000")
    expect(input.value).toBe("000000·00000")
  })
  it("Should only accept digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <NationalIdInput id="test" data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "abc+^^`@*_-.,:(╯°□°)╯︵ ┻━┻")
    expect(input.value).toBe("")
  })
})
