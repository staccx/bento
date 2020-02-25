import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import MessageLoader from "./MessageLoader"
import { messages } from "../loaders.messages"

describe("FullScreenLoader", () => {
  describe("Snapshots", () => {
    it("Messages", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <MessageLoader messages={["hei"]} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Multiple words", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <MessageLoader messages={messages} delay={1000} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("invalid Messages", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <MessageLoader messages="hei" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
