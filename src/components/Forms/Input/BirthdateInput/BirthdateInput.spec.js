import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import BirthdateInput from "./BirthdateInput"
import "@testing-library/jest-dom"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <BirthdateInput
        labels={["Day", "Month", "Year"]}
        ids={["Day1", "Month1", "Year1"]}
        onChange={console.log}
      />
    </ThemeProvider>
  )
  const day = utils.getByLabelText("Day")
  const month = utils.getByLabelText("Month")
  const year = utils.getByLabelText("Year")
  return {
    day,
    month,
    year,
    ...utils
  }
}

describe("BirthdateInput", () => {
  describe("Snapshots", () => {
    it("All props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <BirthdateInput
              label="BirthdateInput"
              ids={["Day1", "Month1", "Year1"]}
              labels={["Day", "Month", "Year"]}
              onChange={console.log}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("simulate input", () => {
      const { day, month, year } = setup()
      fireEvent.change(day, { target: { value: 12 } })
      fireEvent.change(month, { target: { value: 1 } })
      fireEvent.change(year, { target: { value: 1995 } })
      expect(day.value).toBe("12")
      expect(month.value).toBe("1")
      expect(year.value).toBe("1995")
    })
    it("simulate input2", () => {
      const { day, month, year } = setup()
      fireEvent.change(day, { target: { value: 12 } })
      fireEvent.change(month, { target: { value: 12 } })
      fireEvent.change(year, { target: { value: 1995 } })
      expect(day.value).toBe("12")
      expect(month.value).toBe("12")
      expect(year.value).toBe("1995")
    })
  })
})

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <BirthdateInput
          data-testid="testID"
          label="BirthdateInput"
          ids={["Day1", "Month1", "Year1"]}
          labels={["Day", "Month", "Year"]}
          onChange={console.log}
        />
      </ThemeProvider>
    )
    expect(screen.getByPlaceholderText("dd")).toBeInTheDocument()
  })
})
