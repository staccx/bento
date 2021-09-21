import getProp, { getField } from "./getProp"

const data = {
  theme: {
    prop: 1,
    propWithField: {
      field: "field"
    },
    grandParent: {
      parent: {
        child: {
          age: 5
        }
      }
    }
  }
}

describe("Get Prop (from theme)", () => {
  it("Should get entire prop if no field is set", () => {
    expect(getProp("prop")(data)).toBe(1)
  })
  it("Should get field if set", () => {
    expect(getProp("propWithField", "field")(data)).toBe(
      data.theme.propWithField.field
    )
  })
  it("Should not break if nothing found", () => {
    expect(getProp("na")(data)).toBe(null)
    expect(getProp("na", "na")(data)).toBe(null)
  })

  it("Should be able to find deep", () => {
    expect(getProp("grandParent.parent.child.age")(data)).toBe(5)
  })

  describe("Get Field", () => {
    it("Should get entire prop if no field is set", () => {
      expect(getField("prop")(data)).toBe(1)
    })
    it("Should get field if set", () => {
      expect(getField("propWithField.field")(data)).toBe(
        data.theme.propWithField.field
      )
    })
    it("Should not break if nothing found", () => {
      expect(getField("na")(data)).toBe(null)
    })
    it("Should handle fallbacks",() => {
      expect(getField("na", "na")(data)).toBe("na")
    })
    it("Should be able to find deep", () => {
      expect(getField("grandParent.parent.child.age")(data)).toBe(5)
    })
  })
})
