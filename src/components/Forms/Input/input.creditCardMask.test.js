import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"

const InputFieldComp = () => {
  return <Input id="creditCard" mode="creditcard" label="creditCardInput" />
}

const setup = () => {
  const utils = render(<InputFieldComp />)
  const input = utils.getByLabelText("creditCardInput")
  return {
    input,
    ...utils
  }
}

describe("Inputs with CreditCard mask", () => {
  test("It should format to match amex", () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: "344545454545343" } })
    expect(input.value).toBe("3445 454545 45343")
  })
  test("It should format to match visa", () => {
    const {input} = setup()
    fireEvent.change(input, {target: { value: "40000909090909090"}})
    expect(input.value).toBe("4000 0909 0909 0909")
  })
  test("It should format to match Mastercard", () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: "5134000000000000"}})
    expect(input.value).toBe("5134 0000 0000 0000")
  })
  test("It should format to match Discover", () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: "6011000000000000"}})
    expect(input.value).toBe("6011 0000 0000 0000")
  })
})
