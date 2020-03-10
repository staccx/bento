import log from "loglevel"

export const pxToRem = pixels => ({ theme }) => {
  const fontSize = theme?.fontSize ?? 16
  if (!theme?.fontSize) {
    log.warn("Font-size not explicitly set. Using default 16px", theme)
  }
  const pixelValue = parseInt(pixels, 10)
  if (pixelValue) {
    return `${pixelValue / fontSize}rem`
  }

  throw new Error("Input is not a numeric value or pixel value")
}
