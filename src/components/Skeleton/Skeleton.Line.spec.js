import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import SkeletonLine from "./Skeleton.Line"

describe("SkeletonLine", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonLine />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonLine className="className" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with height", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonLine className="className" height={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with width", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonLine className="className" width={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
