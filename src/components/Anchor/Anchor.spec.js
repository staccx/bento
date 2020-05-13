import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import baseTheme from "../../theming/themes/baseTheme"
import Anchor from "./Anchor"

const Child = () => <p>Body</p>

describe("Anchor", () => {
  describe("Snapshots", () => {
    it("no props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Anchor>
              <Child />
            </Anchor>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("href", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Anchor href="https://stacc.com">
              <Child />
            </Anchor>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Anchor href="https://stacc.com" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Rendering", () => {
    it("Should render child", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Anchor>
            <Child />
          </Anchor>
        </ThemeProvider>
      )
      expect(screen.getByText("Body")).toBeInTheDocument()
    })
  })
})
