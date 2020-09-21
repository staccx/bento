import { renderHook } from "@testing-library/react-hooks"
import { usePostalCode } from "./usePostalCode"
import axios from "axios"

jest.mock("axios")

const fyllingsdalen = {
  result: "FYLLINGSDALEN",
  valid: true,
  postalCodeType: "NORMAL"
}
const bergen = { result: "BERGEN", valid: true, postalCodeType: "NORMAL" }
const mockFunction = data => () => Promise.resolve({ data })

describe("Use postal code", () => {
  it("Should receive data if correct input", async () => {
    axios.mockImplementationOnce(mockFunction(bergen))
    const { result, waitForNextUpdate } = renderHook(() =>
      usePostalCode("5006")
    )
    await waitForNextUpdate()

    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("BERGEN")
  })

  it("Should work with integers", async () => {
    axios.mockImplementationOnce(mockFunction(fyllingsdalen))
    const { result, waitForNextUpdate } = renderHook(() => usePostalCode(5145))

    await waitForNextUpdate()
    expect(result.error).toBeUndefined()
    expect(result.current).not.toBeUndefined()
    expect(result.current[0].result).toBe("FYLLINGSDALEN")
  })

  it("Should not work if < 4 characters", () => {
    axios.mockImplementationOnce(mockFunction([]))
    const { result } = renderHook(() => usePostalCode(500))

    expect(result.error).toBeUndefined()
    expect(result.current).toStrictEqual([undefined, undefined])
  })
})
