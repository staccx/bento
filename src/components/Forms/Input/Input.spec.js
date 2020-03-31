import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Input from "./Input"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <Input label="input" id="4" />
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
            <Input />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input label="Input" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("PlaceHolder", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input
              label="Secret question"
              placeholder="Your favourite animal"
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Disabled", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input label="Input" disabled />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("HelpText", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Input label="Input" helpText="This is an input" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("simulate input", () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: "hei" } })
      expect(input.value).toBe("hei")
    })
  })
})
