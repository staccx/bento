import React from "react"
import { act, renderHook } from "@testing-library/react-hooks"
import Provider, { useI18n } from "./I18n"

describe("usei18n", () => {
  it("Should fallback", () => {
    let wrapper = null
    act(() => {
      wrapper = ({ children }) => (
        <Provider language="nb" level={0}>
          {children}
        </Provider>
      )
    })
    renderHook(
      () => {
        const { translate } = useI18n()

        const translated = translate("test", {}, "fallback")
        expect(translated).toBe("fallback")
      },
      { wrapper }
    )
  })
})
