import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import CreditCardInput from "./CreditCardInput"

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
    it("simulate input", () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: 11018420038 } })
      expect(input.value).toBe("11018420038")
    })
  })
})

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CreditCardInput id="1" data-testid="testID" label="input" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
