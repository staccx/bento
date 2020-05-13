import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import CheckGroup from "./CheckGroup"
import CheckBox from "../CheckBox/CheckBox"

describe("Checkbox", () => {
  describe("Snapshots", () => {
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckGroup group="test">
              <CheckBox id="12" key="key_vdvsew">
                test
              </CheckBox>
              <CheckBox id="13" key="keyfwe_vdvsew">
                test
              </CheckBox>
            </CheckGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckGroup
              group="test"
              onChange={e => console.log(e.target.value)}
            >
              <CheckBox id="12" key="key_vdvsew">
                test
              </CheckBox>
              <CheckBox id="13" key="keyfwe_vdvsew">
                test
              </CheckBox>
            </CheckGroup>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  it("Should be checked", () => {
    console.log = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckGroup group="test" onChange={() => console.log("checked")}>
          <CheckBox data-testid="first-element" id="1" key="first_test_value">
            Test Value 1
          </CheckBox>
          <CheckBox data-testid="second-element" id="2" key="second_test_value">
            Test Value 2
          </CheckBox>
          <CheckBox data-testid="third-element" id="3" key="third_test_value">
            Test Value 3
          </CheckBox>
        </CheckGroup>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByTestId("first-element"))
    expect(console.log.mock.calls[0][0]).toBe("checked")
  })
})
