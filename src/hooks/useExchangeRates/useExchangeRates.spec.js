import axios from "axios"
import { renderHook } from "@testing-library/react-hooks"
import { useExchangeRates } from "./useExchangeRates"

describe("Use exchange rates", () => {
  beforeAll(() => {
    axios.get = jest.fn(() =>
      Promise.resolve({ data: { rates: { USD: 10, CAD: 7.42 } } })
    )
  })

  it("Should convert to US", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useExchangeRates("NOK")
    )
    await waitForNextUpdate()

    const { convert, getExchangeRate } = result.current

    expect(convert).not.toBeUndefined()
    expect(getExchangeRate).not.toBeUndefined()

    expect(convert("USD", 10)).toBe(100)
    expect(convert("CAD", 10)).toBe(74.2)

    expect(getExchangeRate("USD")).toBe(10)
    expect(getExchangeRate("CAD")).toBe(7.42)
  })
})
