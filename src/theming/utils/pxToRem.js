import { logger } from "../index"

export const pxToRem = pixels => ({ theme }) => {
  const baseSize = theme?.baseSize ?? 16
  if (!theme?.baseSize) {
    logger.warn("Font-size not explicitly set. Using default 16px", theme)
  }
  const pixelValue = parseInt(pixels, 10)
  if (pixelValue) {
    return `${pixelValue / baseSize}rem`
  }

  throw new Error("Input is not a numeric value or pixel value")
}
