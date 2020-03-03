import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Pack from "./Pack"
import PackItem from "./PackItem"

describe("Pack", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack>
              <PackItem>Loan</PackItem>
              <PackItem>Credit</PackItem>
              <PackItem>Saving</PackItem>
              <PackItem>About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack className="className">
              <PackItem>Loan</PackItem>
              <PackItem>Credit</PackItem>
              <PackItem>Saving</PackItem>
              <PackItem>About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("bottom", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack bottom>
              <PackItem>Loan</PackItem>
              <PackItem>Credit</PackItem>
              <PackItem>Saving</PackItem>
              <PackItem>About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("middle", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack middle>
              <PackItem>Loan</PackItem>
              <PackItem>Credit</PackItem>
              <PackItem>Saving</PackItem>
              <PackItem>About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("noWrap", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack noWrap>
              <PackItem>Loan</PackItem>
              <PackItem>Credit</PackItem>
              <PackItem>Saving</PackItem>
              <PackItem>About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("justify", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack justify="flex-start">
              <PackItem className="test">Loan</PackItem>
              <PackItem className="test">Credit</PackItem>
              <PackItem className="test">Saving</PackItem>
              <PackItem className="test">About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Middle&Bottom", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack middle bottom>
              <PackItem className="test">Loan</PackItem>
              <PackItem className="test">Credit</PackItem>
              <PackItem className="test">Saving</PackItem>
              <PackItem className="test">About this bank</PackItem>
            </Pack>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Pack />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
