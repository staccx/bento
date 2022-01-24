import { deepfind } from "./deepfind"

const object = {
  a: {
    b: {
      c: {
        d: ["a", "b"],
        e: "eee"
      }
    }
  }
}

describe("Deepfind", () => {
  it("Should find properties in object", () => {
    expect(deepfind(object, "a.b.c.d")).toEqual(["a", "b"])
    expect(deepfind(object, "a.b.c.e")).toEqual("eee")
  })
})
