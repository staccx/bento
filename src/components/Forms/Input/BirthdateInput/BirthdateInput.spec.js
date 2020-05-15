import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import BirthdateInput from "./BirthdateInput"
import userEvent from "@testing-library/user-event"

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
  })
})

describe("Rendering", () => {
  it("Should render and be changed", () => {
    const { day, month, year } = setup()
    userEvent.type(day, "12")
    userEvent.type(month, "1")
    userEvent.type(year, "1337")

    expect(screen.getByPlaceholderText("dd")).toBeInTheDocument()
    expect(day.value).toBe("12")
    expect(month.value).toBe("1")
    expect(year.value).toBe("1337")
  })
  it("Should follow date, month and year input lengths", () => {
    const { day, month, year } = setup()
    userEvent.type(day, "122095")
    userEvent.type(month, "019045")
    userEvent.type(year, "133337")
    expect(screen.getByPlaceholderText("dd")).toBeInTheDocument()
    expect(day.value).toBe("12")
    expect(month.value).toBe("01")
    expect(year.value).toBe("1333")
  })
})
