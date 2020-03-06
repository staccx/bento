import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import SliderKeyboardInput from "./SliderKeyboardInput"

describe("SliderKeyboardInput", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Name", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput name="slider" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("showLabel", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput showLabel />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("value", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput value={100} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("step", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput step={1} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onBlur", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput onBlur={() => console.log("test")} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput onChange={() => console.log("test")} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("min", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput min={0} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("max", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput max={1000} />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput label="Label" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("all", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SliderKeyboardInput
              showLabel
              step={1}
              value={100}
              name="slider"
              label="Label"
              onBlur={() => console.log("test")}
              onChange={e => console.log(e.target.value)}
              max={1000}
              min={0}
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
