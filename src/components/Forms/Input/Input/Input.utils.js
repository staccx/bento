import { accountMask, baseMask } from "./masks"

export const createMaskFactory = (mode, logger = null) => {
  if (!mode) {
    return baseMask
  }
  switch (mode) {
    case "account":
      return accountMask
    default:
      logger?.warn("Mode not supported:", mode)
      return baseMask
  }
}
