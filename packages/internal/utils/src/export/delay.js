import restArguments from "../helpers/restArguments"

export default () =>
  restArguments((func, wait, args) => {
    return setTimeout(function() {
      return func.apply(null, args)
    }, wait)
  })
