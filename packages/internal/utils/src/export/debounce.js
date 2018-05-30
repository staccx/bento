import restArguments from "../helpers/restArguments"
import delay from "./delay"

export default (func, wait, immediate) => {
  let timeout, result

  const later = (context, args) => {
    timeout = null
    if (args) {
      result = func.apply(context, args)
    }
  }

  const debounced = restArguments(args => {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(later, wait)
      if (callNow) result = func.apply(this, args)
    } else {
      timeout = delay(later, wait, this, args)
    }

    return result
  })

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
