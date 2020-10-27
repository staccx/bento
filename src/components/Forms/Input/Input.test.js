import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"

const theme = {
  targetSize: {
    normal: "10px"
  },
  color: {
    bg: "white",
    line: "#321313",
    subtleHover: "#313131"
  },
  spacing: {
    small: "12px"
  },
  font: {
    input: "16px"
  },
  fontFamily: {
    body: "Montserrat"
  }
}
describe("Input", () => {
  it("Should work with no props", () => {
    const ref = React.createRef()
    const renderInput = (
      <ThemeProvider theme={theme}>
        <Input ref={ref} id="input"/>
      </ThemeProvider>
    )
    const utils = render(renderInput)
    expect(ref.current.value).toBe("")
    fireEvent.change(ref.current, { target: { value: "wow" } })
    utils.rerender(renderInput)
    expect(ref.current.value).toBe("wow")
  })
  it("should allow default value", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Input defaultValue="This is the default value" id="input"/>
      </ThemeProvider>
    )
    expect(input.value).toBe("This is the default value")
  })
  it("should change defaultValue", () => {
    const ref = React.createRef()
    const renderInput = (
      <ThemeProvider theme={theme}>
        <Input ref={ref} id="input" defaultValue="This is the default value"/>
      </ThemeProvider>
    )
    const utils = render(renderInput)
    expect(ref.current.value).toBe("This is the default value")
    fireEvent.change(ref.current, { target: { value: "wow" } })
    utils.rerender(renderInput)
    expect(ref.current.value).toBe("wow")
  })
})
