import React from "react"
import Input from "./Input"
import baseTheme from "../../../theming/themes/baseTheme"
import { ThemeProvider } from "styled-components"
import { render, fireEvent } from "@testing-library/react"

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

  it("should have inputMode email", () => {
    const ref= React.createRef()
    render(
      <ThemeProvider theme={baseTheme}>
        <Input ref={ref} id="input" {...Input.inputModes.email} />
      </ThemeProvider>
    )
    expect(ref.current.inputMode).toBe("email")
    expect(ref.current.type).toBe("text")
  })

  it("should have inputMode numeric", () => {
    const ref= React.createRef()
    render(
      <ThemeProvider theme={baseTheme}>
        <Input ref={ref} id="input" {...Input.inputModes.numeric} />
      </ThemeProvider>
    )
    expect(ref.current.inputMode).toBe("numeric")
    expect(ref.current.pattern).toBe('/[0-9]*/')
    expect(ref.current.type).toBe("text")
  })


})
