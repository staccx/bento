import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import SelectSimple from "./SelectSimple"

describe("SelectSimple", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SelectSimple>
              <option value={1}>Gift </option>
              <option value={2}>Samober</option>
              <option value={3}>Skilt</option>
              <option value={4}>Partnerskap</option>
              <option value={5}>Enke/Enkemann</option>
              <option value={6}>Separert</option>
            </SelectSimple>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Label", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SelectSimple label="Sivilstatus">
              <option value={1}>Gift </option>
              <option value={2}>Samober</option>
              <option value={3}>Skilt</option>
              <option value={4}>Partnerskap</option>
              <option value={5}>Enke/Enkemann</option>
              <option value={6}>Separert</option>
            </SelectSimple>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("Placeholder", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SelectSimple label="Sivilstatus" placeholder="Velg...">
              <option value={1}>Gift </option>
              <option value={2}>Samober</option>
              <option value={3}>Skilt</option>
              <option value={4}>Partnerskap</option>
              <option value={5}>Enke/Enkemann</option>
              <option value={6}>Separert</option>
            </SelectSimple>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("id", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SelectSimple
              label="Sivilstatus"
              placeholder="Velg..."
              id="simpleSelect"
            >
              <option value={1}>Gift </option>
              <option value={2}>Samober</option>
              <option value={3}>Skilt</option>
              <option value={4}>Partnerskap</option>
              <option value={5}>Enke/Enkemann</option>
              <option value={6}>Separert</option>
            </SelectSimple>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("no Children", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <SelectSimple
              label="Sivilstatus"
              placeholder="Velg..."
              id="simpleSelect"
            />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
