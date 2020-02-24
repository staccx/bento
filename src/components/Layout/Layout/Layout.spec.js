import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import Layout from "./Layout"
import LayoutItem from "./LayoutItem"

describe("Layout", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout>
              <LayoutItem>I'm the header inside a row!</LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("ClassName", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout className="ClassName">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("grid", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout grid="rows">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("columnGap", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout columnGap="huge">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("rowGap", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout rowGap="huge">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("paddingBottom", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout PaddingBottom="huge">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("paddingTop", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout PaddingTop="huge">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("isNotFlush", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout rowGap="flush">
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout
              PaddingTop="huge"
              grid="rows"
              PaddingBottom="huge"
              rowGap="huge"
              columnGap="huge"
            >
              <LayoutItem className="ClassName">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Item area", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Layout grid="rows">
              <LayoutItem className="ClassName" area="header">
                I'm the header inside a row!
              </LayoutItem>
            </Layout>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
