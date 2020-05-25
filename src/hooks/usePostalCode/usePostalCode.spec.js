import { renderHook } from "@testing-library/react-hooks"
import { usePostalCode } from "./usePostalCode"
import axios from "axios"

const results = [
  { result: "FYLLINGSDALEN", valid: true, postalCodeType: "NORMAL" },
  { result: "BERGEN", valid: true, postalCodeType: "NORMAL" }
]

describe("Use postal code", () => {
  beforeAll(() => {
    axios.get = jest.fn(() => Promise.resolve({ data: { result: results } }))
  })

  it("Should receive data if correct input", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePostalCode("5006")
    )
    await waitForNextUpdate()

    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("BERGEN")
  })

  it("Should work with integers", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePostalCode(5145))

    await waitForNextUpdate()
    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("FYLLINGSDALEN")
  })

  it("Should not work if < 4 characters", () => {
    const { result } = renderHook(() => usePostalCode(500))

    expect(result.error).toBeUndefined()
    expect(result.current).toStrictEqual([undefined, undefined])
  })
})
