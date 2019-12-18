import restArguments from "./helpers/restArguments"

export const delay = () =>
  restArguments((func, wait, args) => {
    return setTimeout(function() {
      return func.apply(null, args)
    }, wait)
  })
