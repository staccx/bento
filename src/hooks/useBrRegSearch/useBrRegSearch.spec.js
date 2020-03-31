import { renderHook } from "@testing-library/react-hooks"
import useBrRegSearch from "./useBrRegSearch"

it("search", () => {
  const { results } = renderHook(() => useBrRegSearch("Stacc"))
  expect(results).not.toBeNull()
})
