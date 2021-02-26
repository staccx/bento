import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"
import { LocaleProvider, locales } from "../../../locale"

const InputFieldComp = () => {
  return <Input id="creditCard" mode="currency" label="currencyInput" />
}

const setup = locale => {
  const utils = render(
    <LocaleProvider locale={locale}>
      <InputFieldComp />
    </LocaleProvider>
  )
  const input = utils.getByLabelText("currencyInput")
  return {
    input,
    ...utils
  }
}

describe("Inputs with currency mask", () => {
  test("Default mask", () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: "100000" } })
    expect(input.value).toBe("100\u00a0000")
  })
  test("Norwegian currency mask", () => {
    const { input } = setup(locales.Norway)
    fireEvent.change(input, { target: { value: "100000" } })
    expect(input.value).toBe("100\u00a0000")
  })
  test("Danish currency mask", () => {
    const { input } = setup(locales.Denmark)
    fireEvent.change(input, { target: { value: "100000" } })
    expect(input.value).toBe("100.000")
  })
  test("Swedish currency mask", () => {
    const { input } = setup(locales.Sweden)
    fireEvent.change(input, { target: { value: "100000" } })
    expect(input.value).toBe("100\u00a0000")
  })
})
