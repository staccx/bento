import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import AccountInput from "./AccountInput"

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
  })
})

describe("Rendering", () => {
  it("Should format valid input correctly", async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <AccountInput id="test" data-testid="testID" label="Balance" />
      </ThemeProvider>
    )
    const input = screen.getByTestId("testID")
    expect(input).toBeInTheDocument()
    await userEvent.type(input, "12345678903")
    await waitFor(() => expect(input.value).toBe("1234 56 78903"))
  })
  it("Should only allow numeric input", async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <AccountInput id="test" data-testid="testID" label="Balance" />
      </ThemeProvider>
    )
    const input = screen.getByTestId("testID")
    await userEvent.type(input, "123abcdefg")
    await waitFor(() => expect(input.value).toBe("123"))
  })

  it("Should only allow 11 digits", async () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <AccountInput id="test" data-testid="testID" label="Balance" />
      </ThemeProvider>
    )
    const input = screen.getByTestId("testID")
    await userEvent.type(input, "1234567890123456789123156789")
    await waitFor(() => expect(input.value).toBe("1234 56 78901"))
  })
})
