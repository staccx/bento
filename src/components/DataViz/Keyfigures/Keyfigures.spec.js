import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import baseTheme from "../../../theming/themes/baseTheme"
import KeyFigures from "./Keyfigures"

const figures = [
  {
    label: "Label",
    amount: 45854,
    key: 546456 + "booked"
  },
  {
    label: "Available",
    amount: 456486,
    key: 56456 + "available"
  },
  {
    label: "New Label",
    amount: 346,
    key: 364 + "available"
  }
]

describe("KeyFigures", () => {
  describe("Snapshots", () => {
    it("Empty Array", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <KeyFigures figures={[]} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With figures", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <KeyFigures
              figures={[
                {
                  label: "Label",
                  amount: 45854,
                  key: 546456 + "booked"
                },
                {
                  label: "Available",
                  amount: 456486,
                  key: 56456 + "available"
                },
                {
                  label: "New Label",
                  amount: 346,
                  key: 364 + "available"
                }
              ]}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With one figure", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <KeyFigures
              figures={[
                {
                  label: "Label",
                  amount: 45854,
                  key: 546456 + "booked"
                }
              ]}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("With children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <KeyFigures
              figures={[
                {
                  label: "Label",
                  amount: 45854,
                  key: 546456 + "booked"
                },
                {
                  label: "Available",
                  amount: 456486,
                  key: 56456 + "available"
                },
                {
                  label: "New Label",
                  amount: 346,
                  key: 364 + "available"
                }
              ]}
            >
              <p>Hey</p>
            </KeyFigures>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Rendering", () => {
    it("should show keyfigures", () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <KeyFigures figures={figures} />
        </ThemeProvider>
      )
      expect(screen.getByText("Label")).toBeInTheDocument()
    })
  })
})
