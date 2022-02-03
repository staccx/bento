export type MaskOptions = {
  name?: string
  type?: string
  blocks?: number[]
  maxLength?: number
  pattern?: RegExp
  delimiter?: RegExp | null
  mask?: string
  format?: (input: any, config: MaskOptions) => string
  prepareConfig?: (config: any, input: string) => any
  prepare?: (input: string, config: MaskOptions) => string
  settle?: (value: any, config: any, rawValue: any) => any
}

export type MaskMode =
  | "account"
  | "creditcard"
  | "currency"
  | "nationalid"
  | "phone"
  | "postalcode"
  | "custom"
