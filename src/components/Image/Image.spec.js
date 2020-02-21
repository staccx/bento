import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Image from "./Image"

describe("Image", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ClassName", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image className="Name" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image size="huge" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image size={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("round", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image round />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("aspectRatio", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image aspectRatio="16:9" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("all", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Image className="Name" size="huge" round aspectRatio="16:9" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
