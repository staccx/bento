import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import { render, screen } from "@testing-library/react"
import PhoneInput from "./PhoneInput"
import userEvent from "@testing-library/user-event"

describe("PhoneInput", () => {
  describe("Snapshots", () => {
    it("ID, children and label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <PhoneInput id="test" label="test">
              <p>test</p>
            </PhoneInput>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  it("Should render and accept correct number", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PhoneInput id="test" label="test" alt="test" />
      </ThemeProvider>
    )
    expect(screen.getByAltText("test")).toBeInTheDocument()
    const input = screen.getByAltText("test")
    userEvent.type(input, "47474747")
    expect(input.value).toBe("474 74 747")
  })
  it("Should only accept digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PhoneInput id="test" label="test" alt="test" />
      </ThemeProvider>
    )
    expect(screen.getByAltText("test")).toBeInTheDocument()
    const input = screen.getByAltText("test")
    userEvent.type(input, "47OO^`*+?")
    expect(input.value).toBe("47")
  })
  it("Should only accept 8 digits", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PhoneInput id="test" label="test" alt="test" />
      </ThemeProvider>
    )
    expect(screen.getByAltText("test")).toBeInTheDocument()
    const input = screen.getByAltText("test")
    userEvent.type(input, "47474747858585")
    expect(input.value).toBe("474 74 747")
  })
})
