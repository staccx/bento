import { maskFormat, removeWhitespace } from "formatting"

export const baseMask = {
  createMask: options => {
    const config = {
      ...options
    }

    let mask = config?.mask ?? null

    if (config.blocks) {
      mask = config.blocks
        .map(block =>
          new Array(block)
            .fill("X")
            .map(i => "X")
            .join("")
        )
        .join(" ")
        .trimEnd()
    }
    console.log("Created mask", mask)
    return {
      mask: value => (mask ? maskFormat(value, mask) : value),
      replace: input => {
        if (!input) {
          return ""
        }

        let value = input

        if (config?.replaceWhitespace) {
          value = removeWhitespace(value)
        }
        if (config?.pattern) {
          value = value.replace(config.pattern, "")
        }
        if (config?.maxLength) {
          value = value.substring(0, Math.min(config.maxLength, value.length))
        }

        return value
      }
    }
  }
}
