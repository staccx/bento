import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { fireEvent, render, screen } from "@testing-library/react"
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
    const onChangeMock = jest.fn()

    render(
      <ThemeProvider theme={baseTheme}>
        <CheckGroup group="test" onChange={onChangeMock}>
          <CheckBox
            data-testid="first-element"
            id="1"
            key="first_test_value"
            value="first"
          >
            Test Value 1
          </CheckBox>
          <CheckBox
            data-testid="second-element"
            id="2"
            key="second_test_value"
            value="2nd"
          >
            Test Value 2
          </CheckBox>
          <CheckBox
            data-testid="third-element"
            id="3"
            key="third_test_value"
            value="3rd"
          >
            Test Value 3
          </CheckBox>
        </CheckGroup>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByTestId("second-element"))
    expect(onChangeMock).toBeCalledWith(["2nd"])
  })

  it("Should respect default defaultChecked", () => {
    const onChangeMock = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckGroup group="test" onChange={onChangeMock}>
          <CheckBox
            data-testid="first-element"
            id="1"
            key="first_test_value"
            value="first"
            defaultChecked
          >
            Test Value 1
          </CheckBox>
          <CheckBox
            data-testid="second-element"
            id="2"
            key="second_test_value"
            value="2nd"
            defaultChecked
          >
            Test Value 2
          </CheckBox>
          <CheckBox
            data-testid="third-element"
            id="3"
            key="third_test_value"
            value="3rd"
            defaultChecked
          >
            Test Value 3
          </CheckBox>
        </CheckGroup>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByTestId("second-element"))
    expect(onChangeMock).toBeCalledWith(["first", "3rd"])
  })
  it("Should respect default defaultChecked", () => {
    const onChangeMock = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckGroup group="test" onChange={onChangeMock}>
          <CheckBox
            data-testid="first-element"
            id="1"
            key="first_test_value"
            value="first"
          >
            Test Value 1
          </CheckBox>
          <CheckBox
            data-testid="second-element"
            id="2"
            key="second_test_value"
            value="2nd"
            defaultChecked
          >
            Test Value 2
          </CheckBox>
          <CheckBox
            data-testid="third-element"
            id="3"
            key="third_test_value"
            value="3rd"
          >
            Test Value 3
          </CheckBox>
        </CheckGroup>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByTestId("second-element"))
    expect(onChangeMock).toBeCalledWith([])
  })

  it("Individual onChange handlers", () => {
    const onChangeMock = jest.fn()
    const onChangeMockChild = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckGroup group="test" onChange={onChangeMock}>
          <CheckBox
            data-testid="first-element"
            id="1"
            key="first_test_value"
            value="first"
          >
            Test Value 1
          </CheckBox>
          <CheckBox
            data-testid="second-element"
            id="2"
            key="second_test_value"
            value="2nd"
            defaultChecked
            onChange={onChangeMockChild}
          >
            Test Value 2
          </CheckBox>
          <CheckBox
            data-testid="third-element"
            id="3"
            key="third_test_value"
            value="3rd"
          >
            Test Value 3
          </CheckBox>
        </CheckGroup>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByTestId("second-element"))
    expect(onChangeMock).toBeCalledWith([])
    expect(onChangeMockChild).toBeCalledTimes(1)
    expect(onChangeMock).toBeCalledTimes(1)
  })
})
