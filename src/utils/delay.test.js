import { delay } from "./delay"

describe("Delay", () => {
  it("Should work", () => {
    let counter = 0
    const func = () => counter++
    delay(func, 10)
    expect(counter).toEqual(0)
    delay(() => {
      expect(counter).toEqual(1)
    }, 15)
  })
  it("Args", () => {
    let counter = 0
    const func = inc => (counter += inc)
    delay(func, 10, 2)
    expect(counter).toEqual(0)
    delay(() => {
      expect(counter).toEqual(2)
    }, 15)
  })

  it("Should return value", () => {
    let counter = 0
    const func = inc => (counter += inc)
    const newValue = delay(func, 10, 2)
    expect(counter).toEqual(0)
    delay(() => {
      expect(newValue).toEqual(2)
    }, 15)
  })
})
