import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import ItemGroup from "./ItemGroup"

const Child = () => <p>Body</p>

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ItemGroup>
              <Child />
              <Child />
            </ItemGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Spacing", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ItemGroup spacing="huge">
              <Child />
              <Child />
            </ItemGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ItemGroup />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid spacing", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <ItemGroup spacing={10} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
