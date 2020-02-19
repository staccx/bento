import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Breadcrumb from "./Breadcrumb"

describe("Breadcrumb", () => {
  describe("Snapshots", () => {
    it("no props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Breadcrumb />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with path", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Breadcrumb
              path={[
                {
                  name: "First page",
                  to: "/"
                },
                {
                  name: "Second page",
                  to: "/level-2"
                },
                {
                  name: "Third page",
                  to: "/level-3"
                },
                {
                  name: "Fourth page"
                }
              ]}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("empty array", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Breadcrumb path={[]} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with child", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Breadcrumb path={[]}>
              <p>test</p>
            </Breadcrumb>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
