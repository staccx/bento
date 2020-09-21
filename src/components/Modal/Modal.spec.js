import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../theming/themes/baseTheme"
import Modal from "./Modal"
import Button from "../Button/Button"

describe("Modal", () => {
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
  })
  describe("Functionality", () => {
    it("Should open", async () => {
      const testRenderer = renderer.create(
        <Modal isOpen>
          <div className="testValue">Tester</div>
        </Modal>
      )

      await waitFor(() => {
        expect(testRenderer.root.props.isOpen).toBe(true)
        expect(
          testRenderer.root.findByProps({ className: "testValue" }).children
        ).toStrictEqual(["Tester"])

        expect(testRenderer.root.children.length).toBe(1)
      })
    })

    it("Should render empty child if not open", () => {
      const testRenderer = renderer.create(
        <Modal isOpen={false}>
          <div className="testValue">Tester</div>
        </Modal>
      )

      expect(testRenderer.root.props.isOpen).toBe(false)
      expect(testRenderer.root.children.length).toBe(1)
    })
  })
  describe("Rendering", () => {
    it("should close on ESC", async () => {
      render(
        <ThemeProvider theme={baseTheme}>
          <Modal isOpen onClose={() => console.log("closed")}>
            <div className="testValue">Tester</div>
            <Button>Focusable</Button>
          </Modal>
        </ThemeProvider>
      )
      await waitFor(
        () => {
          fireEvent.keyPress(screen.getByText("Tester"), {
            key: "Esc",
            code: "Esc"
          })
          expect(screen.queryBy * "Tester").toBeNaN()
        },
        {
          timeout: 1000
        }
      )
    })
  })
})
