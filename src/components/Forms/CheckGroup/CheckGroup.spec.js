import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CheckGroup from "./CheckGroup"
import CheckBox from "../CheckBox/CheckBox"

describe("Checkbox", () => {
  describe("Snapshots", () => {
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckGroup group="test">
              <CheckBox id="12" key="key_vdvsew">
                test
              </CheckBox>
              <CheckBox id="13" key="keyfwe_vdvsew">
                test
              </CheckBox>
            </CheckGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckGroup group="test" onChange={() => console.log("hei")}>
              <CheckBox id="12" key="key_vdvsew">
                test
              </CheckBox>
              <CheckBox id="13" key="keyfwe_vdvsew">
                test
              </CheckBox>
            </CheckGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
