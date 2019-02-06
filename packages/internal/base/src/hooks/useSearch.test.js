import React from "react"
import { render, cleanup, getByTestId, fireEvent } from "react-testing-library"
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
  const [result, search] = useSearch({
    uniqueProp: "_id",
    documents: testData,
    indices: [["name", "first"], "company"]
  })

  return (
    <div>
      <button
        data-testid={"button"}
        onClick={() => {
          search(term)
        }}
      >
        search
      </button>
      <span data-testid={"result"}>{result.length}</span>
    </div>
  )
}

describe("useSearch", () => {
  afterEach(cleanup)
  it("Should work", () => {
    const { container, rerender } = render(<TestComp />)
    const span = getByTestId(container, "result")
    const button = getByTestId(container, "button")

    expect(span.textContent).toBe("0")

    fireEvent.click(button)
    expect(span.textContent).toBe("0")

    rerender(<TestComp term={"Roberta"} />)
    expect(span.textContent).toBe("0")
    fireEvent.click(button)
    expect(span.textContent).toBe("1")

    rerender(<TestComp term={"Sulfax"} />)
    expect(span.textContent).toBe("1")
    fireEvent.click(button)
    expect(span.textContent).toBe("2")
  })
})
