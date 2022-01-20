import React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { render, cleanup, getByTestId } from "@testing-library/react"
import useSearch from "./useSearch"

const testData = [
  {
    _id: "5c5ab303a48c9a949841db6b",
    index: 0,
    name: {
      first: "Rivers",
      last: "Dalton"
    },
    company: "SULFAX"
  },
  {
    _id: "5c5ab3030e8900aad3d18c3c",
    index: 1,
    name: {
      first: "Barlow",
      last: "Waller"
    },
    company: "CORIANDER"
  },
  {
    _id: "5c5ab303b83f1ff80db590d5",
    index: 2,
    name: {
      first: "Roberta",
      last: "Ramirez"
    },
    company: "SULFAX"
  }
]

// Test component that uses the Hook
function TestComp({ term }) {
  const [result] = useSearch({
    input: term,
    documents: testData,
    keys: ["name.first", "company"]
  })

  return (
    <div>
      <span data-testid="result">{result.length}</span>
    </div>
  )
}

describe("useSearch", () => {
  afterEach(cleanup)
  it("Should work", () => {
    const { container, rerender } = render(<TestComp term="" />)
    const span = getByTestId(container, "result")

    expect(span.textContent).toBe("3")

    rerender(<TestComp term="Roberta" />)
    expect(span.textContent).toBe("1")

    rerender(<TestComp term="Sulfax" />)
    expect(span.textContent).toBe("2")
  })

  describe("Hook", () => {
    it("Should receive results", () => {
      const { result } = renderHook(() =>
        useSearch({
          input: "Rivers",
          documents: testData,
          keys: ["name.first"]
        })
      )

      const [searchResult] = result.current
      expect(Array.isArray(searchResult)).toBe(true)
      expect(searchResult.length).toBe(1)
      console.log("searchresults", searchResult)
      expect(searchResult[0].item.name.first).toBe("Rivers")
    })

    it("Should receive no results if none match", () => {
      const { result } = renderHook(() =>
        useSearch({
          input: "Hauken",
          documents: testData,
          keys: ["name.first"]
        })
      )

      const [searchResult] = result.current
      expect(Array.isArray(searchResult)).toBe(true)
      expect(searchResult.length).toBe(0)
    })

    it("Should support any key", () => {
      const { result } = renderHook(() =>
        useSearch({
          input: "SULFAX",
          documents: testData,
          keys: ["company"]
        })
      )

      const [searchResult] = result.current
      expect(Array.isArray(searchResult)).toBe(true)
      expect(searchResult.length).toBe(2)
    })

    it("Should support any case", () => {
      const { result } = renderHook(() =>
        useSearch({
          input: "sulfax",
          documents: testData,
          keys: ["company"]
        })
      )

      const [searchResult] = result.current
      expect(Array.isArray(searchResult)).toBe(true)
      expect(searchResult.length).toBe(2)
    })

    it("Should return all docs if no input", () => {
      const { result } = renderHook(() =>
        useSearch({
          input: null,
          documents: testData,
          keys: ["company"]
        })
      )

      const [searchResult] = result.current
      expect(Array.isArray(searchResult)).toBe(true)
      expect(searchResult.length).toBe(3)
    })
  })
})
