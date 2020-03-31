import React from "react"
import { fireEvent, render } from "@testing-library/react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import AccountInput from "./AccountInput"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <AccountInput id="1" label="input" />
    </ThemeProvider>
  )
  const input = utils.getByLabelText("input")
  return {
    input,
    ...utils
  }
}

describe("AccountInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Type", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" type="text" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <AccountInput id="wegwf" label="Balance" />
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
