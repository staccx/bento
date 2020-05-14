import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import CurrencyInput from "./CurrencyInput"
import userEvent from "@testing-library/user-event"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <CurrencyInput id="1" label="input" suffix="kr" prefix="kr" />
    </ThemeProvider>
  )
  const input = utils.getByLabelText("input")
  return {
    input,
    ...utils
  }
}

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CurrencyInput id="test" suffix="kr" prefix="kr" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  it("Should render and accept value", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CurrencyInput id="test" data-testid="testID" suffix="kr" prefix="kr" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "1000")
    expect(input.value).toBe("kr1 000")
  })
  it("Should only accept numeric", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CurrencyInput id="test" data-testid="testID" suffix="kr" prefix="kr" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "1000dsv")
    expect(input.value).toBe("kr1 000")
  })
})
