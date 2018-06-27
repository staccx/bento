import mergeDeep from "./mergeDeep"

const target = {}

const src1 = {
  b: {
    c1: "src1",
    d: "initial"
  }
}

const src2 = {
  b: {
    c2: "src2",
    d: "temporary"
  }
}

const src3 = {
  b: {
    c3: "src3",
    d: "final"
  }
}

const result = {
  b: {
    c1: "src1",
    c2: "src2",
    c3: "src3",
    d: "final"
  }
}

describe("Mergedeep", () => {
  it("should deep merge three objects", () => {
    expect(mergeDeep(target, src1, src2, src3)).toEqual(result)
  })
})
