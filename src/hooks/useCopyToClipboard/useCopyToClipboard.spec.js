import React from "react"
import { render, screen } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import "@testing-library/jest-dom"
import { useCopyToClipboard } from "./useCopyToClipboard"

// TODO: Ser ut som copy-to-clipboard er vanskelig å jest teste, se: https://github.com/nkbt/react-copy-to-clipboard/issues/106

describe.skip("useCopyToClipboard", () => {
  it("should copyContent", async () => {
    const { values } = renderHook(() => useCopyToClipboard("test"))
    render(
      <div>
        <ul>
          <li>{values}</li>
        </ul>
      </div>
    )

    expect(screen.getByText("ContentCopied")).toBeInTheDocument()
  })
})
