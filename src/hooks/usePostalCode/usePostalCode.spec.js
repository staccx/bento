import { renderHook } from "@testing-library/react-hooks"
import { usePostalCode } from "./usePostalCode"

describe("Use postal code", () => {
  it.skip("Should receive data if correct input", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePostalCode("5006")
    )
    await waitForNextUpdate()

    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("BERGEN")
  })

  it.skip("Should work with integers", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePostalCode(5006))

    await waitForNextUpdate()

    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("BERGEN")
  })

  it.skip("Should not work if < 4 characters", () => {
    const { result } = renderHook(() => usePostalCode(500))

    expect(result.error).toBeUndefined()
    expect(result.current).toStrictEqual([undefined, undefined])
  })
})
