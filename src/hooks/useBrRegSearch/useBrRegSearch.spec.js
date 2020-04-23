import { renderHook } from "@testing-library/react-hooks"
import useBrRegSearch from "./useBrRegSearch"

describe.skip("useBrregSearch", () => {
  it("search", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("Stacc")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
    expect(result.current.results.length).toBe(4)
  })
  it("Should work with org nr", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useBrRegSearch("920318886")
    )
    await waitForNextUpdate()
    expect(result.current.results).not.toBeUndefined()
    expect(result.current.results.length).toBe(1)
    expect(result.current.results[0].navn).toBe("STACC X AS")
  })
})
