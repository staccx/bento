import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Flag from "./Flag"

const Child = () => <p>Body</p>

describe("Flag", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("img", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag
              img={
                <img
                  src="http://via.placeholder.com/150x150"
                  width="100"
                  height="100"
                />
              }
            />
            <Child />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag className="className" />
            <Child />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("reverse", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag reverse>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("top", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag top>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("bottom", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag bottom>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("responsive", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag responsive={10}>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("flush", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag flush>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("large", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag large>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("small", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag small>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("tiny", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag tiny>
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Flag
              tiny
              responsive={10}
              bottom
              className="className"
              img={
                <img
                  src="http://via.placeholder.com/150x150"
                  width="100"
                  height="100"
                />
              }
            >
              <Child />
            </Flag>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
