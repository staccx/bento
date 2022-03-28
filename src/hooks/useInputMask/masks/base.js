import { maskFormat } from "../../../formatting"

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

export const pipe = value => (...functions) =>
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

      return pipe(input?.toString() ?? "")(
        _ => (config?.delimiter && _ ? _.replace(config?.delimiter, "") : _),
        _ => (config?.pattern ? _.replace(config?.pattern, "") : _),
        _ =>
          config?.maxLength && _.length > config?.maxLength
            ? _.substring(0, Math.min(config.maxLength, _.length))
            : _
      )
    },
    format: (input, { mask }) => (mask ? maskFormat(input, mask) : input),
    settle: (value, config, rawValue) => ({ value }),
    mask: options?.mask ?? resolveBlocks(options?.blocks) ?? "",
    ...options,
    delimiter // Keep delimiter last since we resolve it at the top.
  }

  return (input, lastValue) => {
    const configPrepared = config.prepareConfig(config, input)
    const { prepare, format, settle } = configPrepared

    const rawValue = prepare(input, configPrepared, lastValue)
    const masked = format(rawValue, configPrepared, lastValue)
    const value = settle(masked, configPrepared, rawValue)
    return {
      ...value,
      rawValue
    }
  }
}
