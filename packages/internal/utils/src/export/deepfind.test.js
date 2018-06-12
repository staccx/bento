import deepfind from "./deepfind"

const obj = {
  components: {
    schema: {
      AuthResponse: 1001
    }
  }
}

describe("Deep Find", () => {
  it("Should find something deep", () => {
    expect(deepfind(obj, "components.schema.AuthResponse")).toBe(1001)
  })
})