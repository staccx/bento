import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import PhoneInput from "./PhoneInput"

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
