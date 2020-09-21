import renderer from "react-test-renderer"
import React from "react"
import ThemeProvider from "./ThemeProvider"
import Button from "../../Button/Button"
import bentoStorybookTheme from "../../../../.storybook/bentoStorybookTheme"

describe("Theme Provider", () => {
  describe("Button", () => {
    it("Button", () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <Button>Click me</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("logLevel", () => {
      const tree = renderer
        .create(
          <ThemeProvider level={1}>
            <Button>Click me</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("everything", () => {
      const tree = renderer
        .create(
          <ThemeProvider level={1} theme={bentoStorybookTheme}>
            <Button>Click me</Button>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
