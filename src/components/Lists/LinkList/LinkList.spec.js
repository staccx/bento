import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import LinkListItem from "./LinkListItem"
import List from "../List.js"

describe("LinkListItem", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <LinkListItem>One ListElement</LinkListItem>
              <LinkListItem>Another List Element</LinkListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <LinkListItem className="className">One ListElement</LinkListItem>
              <LinkListItem className="className">
                Another List Element
              </LinkListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("to", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <LinkListItem to="/">One ListElement</LinkListItem>
              <LinkListItem to="/">Another List Element</LinkListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onClick", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <LinkListItem onClick={e => console.log(e.target.value)}>
                One ListElement
              </LinkListItem>
              <LinkListItem onClick={e => console.log(e.target.value)}>
                Another List Element
              </LinkListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("All", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <List>
              <LinkListItem
                className="className"
                to="/"
                onClick={e => console.log(e.target.value)}
              >
                One ListElement
              </LinkListItem>
              <LinkListItem
                className="className"
                to="/"
                onClick={e => console.log(e.target.value)}
              >
                Another List Element
              </LinkListItem>
            </List>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
