import { partition } from "./partition"

const list = [
  { flag: true, string: "foo" },
  { flag: true, string: "bar" },
  { flag: false, string: "foo" },
  { flag: false, string: "bar" }
]

describe("Partition", () => {
  it("Should split an array in two based on condition", () => {
    const [accepted, declined] = partition(list, item => item.flag)
    expect(accepted.length).toBe(2)
    expect(declined.length).toBe(2)
    expect(accepted.filter(item => item.string === "foo").length).toBe(1)
  })
})
