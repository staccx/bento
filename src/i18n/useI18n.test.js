import React from "react"
import { renderHook, act } from "@testing-library/react-hooks"
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

  it("Should receive language", async () => {
    let wrapper = null
    act(() => {
      wrapper = ({ children }) => (
        <Provider language="nb" level={5}>
          {children}
        </Provider>
      )
    })
    const { result, waitForNextUpdate } = renderHook(() => useI18n(), {
      wrapper
    })
    await waitForNextUpdate()
    expect(result.current.language).toBe("nb")
  })
})
