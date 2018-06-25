import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"

const themeLaser = new Theme(BaseTheme, {
  name: "Laser",
  webfonts: {
    google: {
      families: ["Libre Baskerville:700", "Libre Franklin:400,600"]
    }
  },
  reset: () => `
  html, h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }
`,
  spacing: {
    huge: "96px",
    largePlus: "72px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px"
  },
  wrapper: {
    small: "420px",
    medium: "720px",
    large: "1024px",
    breakout: "640px"
  },
  color: {
    bg: "#fff",
    primary: "#2D9CDB",
    secondary: "#CF27AA",
    gray: "#767676",
    grayLight: "#C7C7C7",
    grayXLight: "#F4F4F4",
    grayDark: "#4F4F4F",
    text: "#2b2b2b",
    white: "#fff",
    line: "#F2F2F2",
    wcag: "#777",
    disabled: "#BABABA",
    warning: "#E32367",
    black: "#000",
    subtleHover: "#C7C7C7",
    btnColor: "#fe83ac"
  },
  graphColor: [
    "#2F80ED",
    "#9B51E0",
    "#BB6BD9",
    "#5D3B9F",
    "#56CCF2",
    "#EB5757",
    "#F2994A",
    "#F2C94C",
    "#219653",
    "#6FCF97",
    "#6FB2CF",
    "#CF756F",
    "#FFBDB1"
  ],
  gradient: {
    laser: ["#5D3B9F", "#CF27AA"],
    galaxy: ["#AB93FF", "#1CCBFF"]
  },
  font: {
    h1: "28px",
    h2: "22px",
    h3: "18px",
    h4: "18px",
    h5: "16px",
    h6: "16px",
    base: "14px",
    small: "14px",
    tiny: "12px",
    input: "16px",
    huge: "44px"
  },
  fontFamily: {
    heading: "Libre Franklin",
    body: "Libre Franklin"
  },
  targetSize: {
    small: "36px",
    normal: "44px",
    large: "68px"
  },
  borderRadius: "15px"
})

export default themeLaser
