import sortByTags from "./sortByTags"

const openapi = {
  swagger: "2.0",
  paths: {
    "/pets": {
      get: {
        summary: "List all pets",
        operationId: "listPets",
        tags: ["a", "b"],
        responses: {}
      }
    },
    "/other": {
      get: {
        summary: "List all pets",
        operationId: "listPets",
        tags: ["b", "c"],
        responses: {}
      }
    }
  }
}

describe("sortByTags", () => {
  it("Should sort by tags", () => {
    expect(sortByTags(openapi, ["a", "b", "c", "d"])).toMatchObject({
      a: { "/pets": {} },
      b: { "/pets": {}, "/other": {} },
      c: { "/other": {} }
    })
  })
})
