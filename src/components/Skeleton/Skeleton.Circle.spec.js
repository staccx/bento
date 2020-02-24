import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import SkeletonCircle from "./Skeleton.Circle"

describe("SkeletonCircle", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonCircle />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonCircle className="className" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with height", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonCircle className="className" height={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with width", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SkeletonCircle className="className" width={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
