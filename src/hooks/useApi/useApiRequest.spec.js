import { renderHook, act } from "@testing-library/react-hooks"
// import axios from "axios"
import { useApiRequest } from "./useApiRequest"

describe("useApiRequest", () => {
  it("Constants states", async () => {
    expect(useApiRequest.states.REQUESTING).toBe("requesting")
    expect(useApiRequest.states.IDLE).toBe("idle")
    expect(useApiRequest.states.SUCCESS).toBe("success")
    expect(useApiRequest.states.ERROR).toBe("error")
  })

  it("Should start in idle state", async () => {
    // axios.mockImplementationOnce(mockFunction(bergen))
    const { result } = renderHook(() => useApiRequest(() => null))

    expect(result.current.state).toBe("idle")
    expect(result.error).toBeUndefined()
  })

  it("Should transition to requesting", async () => {
    // axios.mockImplementationOnce(mockFunction(bergen))
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiRequest(() => null)
    )

    await act(async () => {
      result.current.submit()
      await waitForNextUpdate()
      expect(result.current.state).toBe("requesting")

      expect(result.error).toBeUndefined()
    })
  })

  it("Should transition to succeed if response is given", async () => {
    // axios.mockImplementationOnce(mockFunction(bergen))
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiRequest(() => Promise.resolve({ result: {}, code: 200 }))
    )

    await act(async () => {
      result.current.submit()
      await waitForNextUpdate()
      expect(result.current.state).toBe("success")
      expect(result.current.stateInstance.context.statusCode).toBe(200)
      expect(result.error).toBeUndefined()
    })
  })

  it("Should transition to error if request fails", async () => {
    // axios.mockImplementationOnce(mockFunction(bergen))
    const error = new Error("Unauthorized")
    error.code = 400

    const { result, waitForNextUpdate } = renderHook(() =>
      useApiRequest(() => Promise.reject(error))
    )

    await act(async () => {
      result.current.submit()
      await waitForNextUpdate()
      expect(result.current.state).toBe("error")
      expect(result.current.stateInstance.context.statusCode).toBe(400)
      expect(
        result.current.stateInstance.context.errorMessage
      ).not.toBeUndefined()
      expect(result.error).toBeUndefined()
    })
  })

  it("Should be allowed to retry failed request", async () => {
    // axios.mockImplementationOnce(mockFunction(bergen))
    const error = new Error("Bad Gateway")
    error.code = 502

    let requestFunction = () => Promise.reject(error)

    const { result, waitForNextUpdate, rerender } = renderHook(() =>
      useApiRequest(() => requestFunction)
    )

    await act(async () => {
      result.current.submit()
      await waitForNextUpdate()
      expect(result.current.state).toBe("error")
      expect(result.current.stateInstance.context.statusCode).toBe(502)
      expect(
        result.current.stateInstance.context.errorMessage
      ).not.toBeUndefined()
      expect(result.error).toBeUndefined()
      // Make sure our function returns succes this time
      requestFunction = () => Promise.resolve({ result: {}, code: 200 })
      rerender()
      result.current.retry()
      await waitForNextUpdate()
      expect(result.current.state).toBe("success")
      expect(result.current.stateInstance.context.statusCode).toBe(200)
      expect(result.error).toBeUndefined()
    })
  })
})
