import React from "react"
import { render, fireEvent } from "react-testing-library"
import Input from "./Input"

describe("Input", () => {
  it("Should work with no props", () => {
    const ref = React.createRef()
    const utils = render(<Input ref={ref} />)
    expect(ref.current.value).toBe("")
    fireEvent.change(ref.current, { target: { value: "wow" } })
    utils.rerender(<Input ref={ref} />)
    expect(ref.current.value).toBe("wow")
  })
})
