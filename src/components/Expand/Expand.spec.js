import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import baseTheme from "../../theming/themes/baseTheme"
import Expand from "./Expand"

const SpanContent = () => <p>header</p>
const Child = () => <p>Body</p>

describe("Expand", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand>
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With title", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand title="Title">
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With console", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand title="Title" onClick={e => console.log("console")}>
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("No children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Expanded true", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand expanded>
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid Expand", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand expanded="true">
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("hide icon", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand hideIcon>
              <span>
                <Child />
              </span>
              <Child />
            </Expand>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Rendering", () => {
    it("should show child onClick", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Expand>
            <span>
              <SpanContent />
            </span>
            <Child />
          </Expand>
        </ThemeProvider>
      )
      fireEvent.click(screen.getByText("header"))
      expect(screen.getByText("Body")).toBeInTheDocument()
    })
    it.skip("should not show child", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Expand>
            <span>
              <SpanContent />
            </span>
            <Child />
          </Expand>
        </ThemeProvider>
      )
      expect(screen.getByText("Body")).toBeNull()
    })
  })
})
