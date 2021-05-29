import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { fireEvent, render, screen } from "@testing-library/react"
import baseTheme from "../../theming/themes/baseTheme"
import Expand from "./Expand"

const SpanContent = () => <p>header</p>
const Child = ({ text = "Body" }) => <p>{text}</p>

describe("Expand", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
            >
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
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
            >
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
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
              onClick={e => console.log("console")}
            >
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
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
              expanded
            >
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
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
              expanded="true"
            >
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
            <Expand
              title={
                <span>
                  <Child />
                </span>
              }
              hideIcon
            >
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
          <Expand
            title={
              <span>
                <SpanContent />
              </span>
            }
          >
            <Child />
          </Expand>
        </ThemeProvider>
      )
      expect(() => screen.getByText("Body"))
      fireEvent.click(screen.getByText("header"))
      expect(screen.getByText("Body")).toBeInTheDocument()
    })
    it("pass onClick", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Expand
            title={
              <span>
                <SpanContent />
              </span>
            }
            onClick={() => {
              console.log("onClick")
            }}
          >
            <Child />
          </Expand>
        </ThemeProvider>
      )
      expect(() => screen.getByText("Body"))
      fireEvent.click(screen.getByText("header"))
      expect(screen.getByText("Body")).toBeInTheDocument()
    })
    it("Expanded false", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Expand
            title={
              <span>
                <SpanContent />
              </span>
            }
            expanded={false}
          >
            <Child />
          </Expand>
        </ThemeProvider>
      )
      expect(() => screen.getByText("Body"))
      fireEvent.click(screen.getByText("header"))
      expect(screen.getByText("Body")).toBeInTheDocument()
    })

    it("Should close on item click if closeOnItemClick is set", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Expand
            title={
              <span>
                <SpanContent />
              </span>
            }
            expanded
            closeOnItemClick
          >
            <Child />
            <Child text="Second child" />
          </Expand>
        </ThemeProvider>
      )
      expect(screen.getByText("Body")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Second child"))
      expect(() => screen.getByText("Body"))
    })
  })
})
