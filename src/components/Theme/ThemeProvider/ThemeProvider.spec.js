import renderer from "react-test-renderer"
import React from "react"
import ThemeProvider from "./ThemeProvider"
import Button from "../../Button/Button"

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
  })
})
