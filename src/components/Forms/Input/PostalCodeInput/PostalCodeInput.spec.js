import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import PostalCodeInput from "./PostalCodeInput"
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("PostalCodeInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <PostalCodeInput />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PostalCodeInput data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})

// TODO: Find a way to catch place.result to test that its correct
describe("Rendering", () => {
  it.skip("Should render and accept correct postal code", async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PostalCodeInput data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    await act(async () => {
      await userEvent.type(input, "5145")
    })
    // const place = screen.queryBy * "Place"
    expect(input.value).toBe("5145")

    // await waitFor(() => expect(place * "BERGEN").toBeInTheDocument())
  })
  it("Should only accept 4 chars", async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <PostalCodeInput data-testid="testID" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
    const input = screen.getByTestId("testID")
    await act(async () => {
      await userEvent.type(input, "50w00t")
    })
    expect(input.value).toBe("50w0")
  })
})
