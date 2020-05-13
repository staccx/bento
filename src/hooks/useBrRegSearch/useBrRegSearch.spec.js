import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
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
  describe("Rendering", () => {
    it("should render Results", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useBrRegSearch("Stacc")
      )
      await waitForNextUpdate()
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getByText("STACC AS")).toBeInTheDocument()
      expect(screen.getByText("STACC X AS")).toBeInTheDocument()
    })
    it("should render empty array", async () => {
      const { result } = renderHook(() => useBrRegSearch("S"))
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getAllBy * "STACC").toBeNaN()
    })
    it("should render empty array not exisiting company", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useBrRegSearch("ThisCompanyHopeFullyDontExist")
      )
      await waitForNextUpdate()
      render(
        <div>
          {result.current.results.map(result => {
            return <p key={result.navn}>{result.navn}</p>
          })}
        </div>
      )
      expect(screen.getAllBy * "ThisCompanyHopeFullyDontExist").toBeNaN()
    })
  })
})
