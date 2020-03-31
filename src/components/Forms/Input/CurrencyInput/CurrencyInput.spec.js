import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import CurrencyInput from "./CurrencyInput"

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
    it("simulate input", () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: 1000 } })
      expect(input.value).toBe("1000")
    })
  })
})
