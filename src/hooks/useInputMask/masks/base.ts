import { maskFormat } from "../../../formatting"
import type { MaskOptions } from "./_types"

const mapBlocks = (block: number) =>
  new Array(block)
    .fill("X")
    .map(i => "X")
    .join("")

export const resolveBlocks = (blocks: number[] = []) =>
  blocks?.map(mapBlocks).join(" ").trimEnd()

const pipe =
  (value: any) =>
  (...functions: any) =>
    functions.reduce(
      (currentValue: any, currentFunction: any) =>
        currentFunction(currentValue),
      value
    )

const resolveDelimiterString = ({ delimiter }: MaskOptions) => {
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

export const baseMask = (options: MaskOptions) => {
  const delimiter = resolveDelimiterString(options)
  const config: MaskOptions = {
    name: "Base mask",
    prepareConfig: (config, input) => config,
    prepare: (input, config) => {
      if (!input) {
        return ""
      }

      return pipe(input?.toString() ?? "")(
        (_: any) =>
          config?.delimiter && _ ? _.replace(config?.delimiter, "") : _,
        (_: any) => (config?.pattern ? _.replace(config?.pattern, "") : _),
        (_: any) =>
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

  return (input: any) => {
    const configPrepared = config.prepareConfig?.(config, input) ?? config
    const { prepare, format, settle } = configPrepared

    const rawValue = prepare(input, configPrepared)
    const masked = format(rawValue, configPrepared)
    const value = settle(masked, configPrepared, rawValue)
    return {
      ...value,
      rawValue
    }
  }
}
