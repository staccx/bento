import React from "react"
import { render, screen } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import "@testing-library/jest-dom"
import { useCopyToClipboard } from "./useCopyToClipboard"
// TODO: Ser ut som copy-to-clipboard er vanskelig å jest teste, se: https://github.com/nkbt/react-copy-to-clipboard/issues/106

describe("useCopyToClipboard", () => {
  // jest.mock("copy-to-clipboard", () => {
  //   return jest.fn()
  // })

  it("should copyContent", async () => {
    const testing = "test"

    const values = renderHook(() => useCopyToClipboard(testing))
    render(
      <div>
        <ul>
          <li>{values.result.current[0]}</li>
        </ul>
      </div>
    )
    expect(screen.getByText("test")).toBeInTheDocument()
  })
})
