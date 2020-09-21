import React from "react"
import { ThemeProvider } from "styled-components"
import { render, screen } from "@testing-library/react"
import baseTheme from "../../../theming/themes/baseTheme"
import ThemeComponent from "./ThemeComponent"
import Theme from "../../../theming/Theme"

let theme = null
describe("ThemeComponent", () => {
  beforeEach(() => {
    theme = new Theme(baseTheme)
  })
  it("Should render if tag exists", () => {
    console.log = jest.fn()

    theme.append({
      LOGO: () => <div>Component</div>
    })
    render(
      <ThemeProvider theme={theme}>
        <ThemeComponent tagName="LOGO" fallback={() => <div>Fallback</div>} />
      </ThemeProvider>
    )
    expect(screen.getByText("Component")).toBeInTheDocument()
    expect(() => screen.getByText("Fallback")).toThrow()
  })

  it("Should fallback if tag does not exists", () => {
    console.log = jest.fn()

    theme.append({
      LOGO: () => <div>Component</div>
    })
    render(
      <ThemeProvider theme={theme}>
        <ThemeComponent
          tagName="noMatch"
          fallback={() => <div>Fallback</div>}
        />
      </ThemeProvider>
    )
    expect(() => screen.getByText("Component")).toThrow()

    expect(screen.getByText("Fallback")).toBeInTheDocument()
  })

  it("Should render children if provided", () => {
    console.log = jest.fn()

    theme.append({
      LOGO: ({ children }) => (
        <div>
          Component
          <div>{children}</div>
        </div>
      )
    })
    render(
      <ThemeProvider theme={theme}>
        <ThemeComponent tagName="LOGO" fallback={() => <div>Fallback</div>}>
          <div>Child</div>
        </ThemeComponent>
      </ThemeProvider>
    )

    expect(screen.getByText("Component")).toBeInTheDocument()
    expect(screen.getByText("Child")).toBeInTheDocument()
  })
})
