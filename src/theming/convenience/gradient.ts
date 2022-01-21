import deepfind from "../utils/deepfind"

const defaultFunc = item => item
const gradient =
  (name, func = defaultFunc) =>
  ({ theme }) => {
    if (!deepfind(theme, ["gradient", name].join("."))) {
      console.warn("Could not find", name, "in gradient")
      return null
    }
    return func(theme.gradient[name])
  }

gradient.first = name => gradient(name, g => g[0]) // TODO: ensure these are value. will crash if not
gradient.last = name => gradient(name, g => g[g.length - 1])

export default gradient
