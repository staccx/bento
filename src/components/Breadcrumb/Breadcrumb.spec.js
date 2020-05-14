import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Breadcrumb from "./Breadcrumb"
import violetTendencies from "../../theming/themes/storybook/violet-tendencies/violetTendenciesTheme"

const path = [
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
]

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
            <Breadcrumb path={path} />
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
  describe("Should render breadcrumb content", () => {
    render(
      <ThemeProvider theme={violetTendencies}>
        <Breadcrumb path={path} />
      </ThemeProvider>
    )
    expect(screen.getByText("First page")).toBeInTheDocument()
  })
})
