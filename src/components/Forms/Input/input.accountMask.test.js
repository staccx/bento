import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"
import { LocaleProvider, locales } from "../../../locale"

const InputFieldComp = () => {
  return <Input id="creditCard" mode="account" label="accountInput" />
}

const setup = locale => {
  const utils = render(
    <LocaleProvider locale={locale}>
      <InputFieldComp />
    </LocaleProvider>
  )
  const input = utils.getByLabelText("accountInput")
  return {
    input,
    ...utils
  }
}

describe("Inputs with account mask", () => {
  test("Default mask", () => {
    const { input } = setup({})
    fireEvent.change(input, { target: { value: "12121212121" } })
    expect(input.value).toBe("1212 12 12121")
  })
  test("Norwegian account mask", () => {
    const { input } = setup(locales.Norway)
    fireEvent.change(input, { target: { value: "12121212121" } })
    expect(input.value).toBe("1212 12 12121")
  })
  test("Danish account mask", () => {
    const { input } = setup(locales.Denmark)
    fireEvent.change(input, { target: { value: "1212121212100" } })
    expect(input.value).toBe("1212 121212100")
  })
  test("Swedish account mask", () => {
    const { input } = setup(locales.Sweden)
    fireEvent.change(input, { target: { value: "12121212121" } })
    expect(input.value).toBe("1212 12 12121")
  })
})
