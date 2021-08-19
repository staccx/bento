import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Button from "./Button"

const text = "Test"

describe("Button", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button>{text}</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with onClick", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button onClick={() => console.log("Clicked")}>{text}</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Button onClick={() => console.log("Clicked")} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Rendering", () => {
    it("Should click", () => {
      console.log = jest.fn()
      render(
        <ThemeProvider theme={baseTheme}>
          <Button onClick={() => console.log("click")}>{text}</Button>
        </ThemeProvider>
      )
      fireEvent.click(screen.getByText("Test"))
      expect(console.log.mock.calls[0][0]).toBe("click")
    })
    it("Should forward ref", () => {
      const ref = React.createRef()
      render(<Button ref={ref}>{text}</Button>)
      expect(ref.current).not.toBeNull()
    })
  })
})
