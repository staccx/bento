import { distinct } from "./distinct"

const arrayOfInts = [1, 2, 3, 4, 5, 1, 2]

const obj1 = {
  name: "test",
  value: 2
}

const obj2 = {
  name: "test2",
  value: 3
}

describe("Distinct", () => {
  it("Should return only distinct values", () => {
    expect(distinct(arrayOfInts)).toEqual([1, 2, 3, 4, 5])
  })

  it("Should handle objects", () => {
    expect(
      distinct([obj1, obj2, obj1, { name: "test", value: 3, test2: 3 }], "name")
    ).toEqual([obj1, obj2])
  })
})
