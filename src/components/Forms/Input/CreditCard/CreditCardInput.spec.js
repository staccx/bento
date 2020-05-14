import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import CreditCardInput from "./CreditCardInput"
import userEvent from "@testing-library/user-event"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <CreditCardInput id="1" label="input" />
    </ThemeProvider>
  )
  const input = utils.getByLabelText("input")
  return {
    input,
    ...utils
  }
}

describe("CreditCardInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CreditCardInput />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  it("Should render and type in value", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CreditCardInput id="1" data-testid="testID" label="input" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "11018420038")
    expect(input.value).toBe("1101 84200 38")
  })
  it("Should only accept numeric", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CreditCardInput id="1" data-testid="testID" label="input" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "1234abcs")
    expect(input.value).toBe("1234 ")
  })
  it("Should only allow 15digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CreditCardInput id="1" data-testid="testID" label="input" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    userEvent.type(input, "11018420038123453462")
    expect(input.value).toBe("1101 84200 381234")
  })
})
