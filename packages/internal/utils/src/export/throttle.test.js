import delay from "./delay"
import throttle from "./throttle"

describe("Throttle", () => {
  it("Normal", () => {
    let counter = 0
    const func = () => counter++

    const throttled = throttle(func, 16)
    for (let i = 0; i < 10; i++) {
      throttled()
    }
    delay(() => {
      expect(counter).toEqual(1)
    })
  })
})
