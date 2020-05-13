import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import testTheme from "../../theming/themes/testTheme"
import { theme as instance } from "../../theming/index"
import violetTendencies from "../../theming/themes/storybook/violet-tendencies/violetTendenciesTheme"
import whiteCollar from "../../theming/themes/storybook/white-collar/whiteCollarTheme"
import Alert from "./Alert"

const Child = () => <p>Body</p>

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert>
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Info", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="info">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Warning", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="warning">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Success", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="success">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("Invalid type", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type={null}>
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("No children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Alert type="warning" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("use Test Theme", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={testTheme}>
            <Alert type="warning">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("use VioletTendencies", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={violetTendencies}>
            <Alert type="warning">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("use whiteCollar", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={whiteCollar}>
            <Alert type="warning">
              <Child />
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("Signature", () => {
    it("createVariants", () => {
      expect(Alert.createVariants).not.toBeNull()

      // This should fail as we provide a non-existant variant. Shoul
      expect(() =>
        Alert.createVariants({
          notAValidThemProps: "test"
        })
      ).toThrow()

      expect(() => {
        Alert.createVariants({
          alert: {
            _default: "background-color: blue;"
          }
        })
      }).not.toThrow()
      expect(instance.ALERT).toStrictEqual({
        _default: "background-color: blue;"
      })
    })
  })
  describe("Rendering", () => {
    it("Should show child", () => {
      render(
        <ThemeProvider theme={violetTendencies}>
          <Alert>
            <Child />
          </Alert>
        </ThemeProvider>
      )
      expect(screen.getByText("Body")).toBeInTheDocument()
    })
  })
})
