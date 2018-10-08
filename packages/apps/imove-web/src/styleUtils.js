import { css } from "styled-components"

const sizes = {
  small: "420",
  medium: "640",
  large: "1040",
  largePlus: "1280",
  breakout: "640",
  chromeMobileS: "320",
  chromeMobileM: "375",
  chromeMobileL: "425",
  chromeTablet: "768",
  chromeLaptop: "1024",
  chromeLaptopL: "1440",
  chrome4K: "2560"
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
