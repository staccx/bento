import { deepfind } from "../utils/deepfind"

export function gradient(name: string, func = (item: any) => item) {
  return ({ theme }: { theme: any }) => {
    if (!deepfind(theme, ["gradient", name].join("."))) {
      console.warn("Could not find", name, "in gradient")
      return null
    }
    return func(theme.gradient[name])
  }
}
gradient.first = (name: string) => gradient(name, g => g[0]) // TODO: ensure these are value. will crash if not
gradient.last = (name: string) => gradient(name, g => g[g.length - 1])

export default gradient
