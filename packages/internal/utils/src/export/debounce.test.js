import debounce from "./debounce"
import delay from "./delay"

describe("Debounce", () => {
  it("Should debounce call", () => {
    let counter = 0
    const inc = () => counter++

    const debounced = debounce(inc, 30)
    debounced()
    delay(debounced, 10)
    delay(() => {
      expect(counter).toEqual(1)
    }, 55)
  })

  it("Should cancel if called", () => {
    let counter = 0
    const inc = () => counter++

    const debounced = debounce(inc, 30)

    debounced()
    delay(debounced.cancel, 10)
    delay(() => {
      expect(counter).toEqual(0)
    }, 55)
  })

  it("Immediate", () => {
    let counter = 0
    const inc = () => counter++

    const debounced = debounce(inc, 30, true)
    debounced()
    debounced()
    expect(counter).toEqual(1)
  })
})
