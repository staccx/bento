import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Wrapper from "./Wrapper"

const Child = () => <p>Body</p>

describe("Wrapper", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper>
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper className="className">
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("size", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper size="large">
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("size full", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper size="full">
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("breakout", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper breakout>
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Wrapper className="className" size="large" breakout>
              <Child />
            </Wrapper>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
