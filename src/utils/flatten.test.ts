import { flatten } from "./flatten"

const arrayOfarrays = [
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
]
describe("Flatten", () => {
  it("Should flatten array", () => {
    expect(flatten(arrayOfarrays)).toEqual([
      "$6",
      "$12",
      "$25",
      "$25",
      "$18",
      "$22",
      "$10"
    ])
  })
})
