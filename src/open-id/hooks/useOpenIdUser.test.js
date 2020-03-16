import React from "react"
import { act, renderHook } from "@testing-library/react-hooks"
import { useOpenIdUser } from "./useOpenIdUser"
import { OpenId } from ".."

describe("Use OpenId user", () => {
  it("Should fail when no context exists", () => {
    let wrapper = null
    act(() => {
      wrapper = ({ children }) => <OpenId config={{}}>{children}</OpenId>
    })
    const { results } = renderHook(() => useOpenIdUser(), { wrapper })
    console.log(results)
    expect(results).not.toBeNull()
  })
})
