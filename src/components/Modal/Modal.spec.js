import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Modal from "./Modal"

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Modal>
              <p> Lorem ipsum dolor sit amet</p>
              <p>Ut rutrum ex ante, ut posuere arcu pellentesque vel.</p>
            </Modal>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("className", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Modal className="className">
              <p> Lorem ipsum dolor sit amet</p>
              <p>Ut rutrum ex ante, ut posuere arcu pellentesque vel.</p>
            </Modal>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("isOpen", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Modal className="className" isOpen>
              <p> Lorem ipsum dolor sit amet</p>
              <p>Ut rutrum ex ante, ut posuere arcu pellentesque vel.</p>
            </Modal>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onClose", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Modal
              className="className"
              onClose={e => console.log(e.target.value)}
            >
              <p> Lorem ipsum dolor sit amet</p>
              <p>Ut rutrum ex ante, ut posuere arcu pellentesque vel.</p>
            </Modal>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onClose", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <Modal
              className="className"
              isOpen
              onClose={e => console.log(e.target.value)}
            >
              <p> Lorem ipsum dolor sit amet</p>
              <p>Ut rutrum ex ante, ut posuere arcu pellentesque vel.</p>
            </Modal>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
