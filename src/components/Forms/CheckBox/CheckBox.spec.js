import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../theming/themes/baseTheme"
import { render, fireEvent, screen } from "@testing-library/react"
import CheckBox from "./CheckBox"

const Child = () => <p>Body</p>

describe("CheckBox", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox>
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("with Id", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID">
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("onChange", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID" onChange={() => console.log("changed!")}>
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("group", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CheckBox id="ID" group="124">
              <Child />
            </CheckBox>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe("Rendering", () => {
  const tempConsole = console.log
  beforeAll(() => {
    console.log = jest.fn()
  })
  afterAll(() => {
    console.log = tempConsole
  })
  it("Should click", () => {
    const onChangeMock = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckBox
          data-testid="test"
          id="ID"
          value="test"
          onChange={e => onChangeMock(e.target.value)}
        >
          <Child />
        </CheckBox>
      </ThemeProvider>
    )
    const checkbox = screen.getByTestId("test")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(onChangeMock).toBeCalledWith("test")
    expect(checkbox.checked).toBe(true)
  })

  it("DefaultChecked", () => {
    const onChangeMock = jest.fn()
    render(
      <ThemeProvider theme={baseTheme}>
        <CheckBox
          data-testid="test"
          id="ID"
          defaultChecked
          onChange={onChangeMock}
        >
          <Child />
        </CheckBox>
      </ThemeProvider>
    )
    const checkbox = screen.getByTestId("test")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(true)
    fireEvent.click(checkbox)
    expect(onChangeMock).toBeCalledTimes(1)
    expect(checkbox.checked).toBe(false)
  })
})
