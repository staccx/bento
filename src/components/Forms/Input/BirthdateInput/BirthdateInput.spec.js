import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import BirthdateInput from "./BirthdateInput"

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
