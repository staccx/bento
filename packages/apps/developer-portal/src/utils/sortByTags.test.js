import sortByTags from "./sortByTags"

const openapi = {
  swagger: "2.0",
  paths: {
    "/pets": {
      get: {
        tags: ["a", "b"]
      }
    },
    "/other": {
      get: {
        tags: ["b", "c"]
      }
    }
  }
}

describe("sortByTags", () => {
  it("Should sort by tags", () => {
    expect(sortByTags(openapi, ["a", "b", "c", "d"])).toMatchObject({
      a: [
        {
          path: "/pets",
          tag: "a",
          tags: ["a", "b"],
          type: "get"
        }
      ],
      b: [
        { path: "/pets", tag: "b", tags: ["a", "b"], type: "get" },
        {
          path: "/other",
          tag: "b",
          tags: ["b", "c"],
          type: "get"
        }
      ],
      c: [{ path: "/other", tag: "c", tags: ["b", "c"], type: "get" }]
    })
  })
})
