import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import CheckBox from "./CheckBox"

const Child = () => <p>Body</p>

describe("CheckBox", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox>
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with Id", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID">
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID" onChange={() => console.log("changed!")}>
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID" group="124">
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
