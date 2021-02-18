import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"
import { LocaleProvider, locales } from "../../../locale"


const setup = locale => {
  const utils = render(
    <Input id="creditCard" mode="account" label="accountInput" locale={locale}/>
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
    fireEvent.change(input, { target: { value: "11111111111111" } })
    expect(input.value).toBe("1111 111111111")
  })
  test("Swedish account mask", () => {
    const { input } = setup(locales.Sweden)
    fireEvent.change(input, { target: { value: "12121212121" } })
    expect(input.value).toBe("1212 12 12121")
  })
})
