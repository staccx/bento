import { renderHook } from "@testing-library/react-hooks"
import useBrRegSearch from "./useBrRegSearch"

describe("useBrregSearch", () => {
  it.skip("search", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("Stacc")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
  })
  it.skip("Should work with org nr", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("920318886")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
  })
})
