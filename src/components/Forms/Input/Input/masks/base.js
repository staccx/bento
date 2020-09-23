import { maskFormat, removeWhitespace } from "formatting"

const mapBlocks = block =>
  new Array(block)
    .fill("X")
    .map(i => "X")
    .join("")

export const resolveBlocks = blocks =>
  blocks
    ?.map(mapBlocks)
    .join(" ")
    .trimEnd()

const pipe = value => (...functions) =>
  functions.reduce(
    (currentValue, currentFunction) => currentFunction(currentValue),
    value
  )

const resolveDelimiterString = ({ delimiter = null }) => {
  if (!delimiter) {
    return null
  }
  if (typeof delimiter === "string") {
    switch (delimiter) {
      case ".":
        return /\./gi
      default:
        return /\s/gi
    }
  }
  return delimiter
}

export const baseMask = options => {
  const delimiter = resolveDelimiterString(options)
  const config = {
    name: "Base mask",
    prepareConfig: (config, input) => config,
    prepare: (input, config) => {
      if (!input) {
        return ""
      }

      return pipe(input)(
        _ => (config?.delimiter && _ ? _.replace(config?.delimiter, "") : _),
        _ => (config?.pattern ? _.replace(config?.pattern, "") : _),
        _ =>
          config?.maxLength
            ? _.substring(0, Math.min(config.maxLength, _.length))
            : _
      )
    },
    format: (input, { mask }) => (mask ? maskFormat(input, mask) : input),
    settle: (value, config) => ({ value }),
    mask: options?.mask ?? resolveBlocks(options?.blocks) ?? "",
    ...options,
    delimiter // Keep delimiter last since we resolve it at the top.
  }

  return input => {
    const configPrepared = config.prepareConfig(config, input)
    const { prepare, format, settle } = configPrepared

    const rawValue = prepare(input, configPrepared)
    const masked = format(rawValue, configPrepared)
    const value = settle(masked, configPrepared)
    return {
      ...value,
      rawValue
    }
  }
}

export const baseMaskOld = {
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
      },
      /**
       * This gets called after replace is called.
       * @param value
       * @returns {{value: *}}
       */
      prepareValue: value => ({
        value
      })
    }
  }
}
