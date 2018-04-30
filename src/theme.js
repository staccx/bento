import { themeManager } from "@staccx/base";
import reset from "./reset";

const borderRadius = "0px";
const headerHeight = "70px";

const targetSize = {
  small: "36px",
  normal: "44px"
};

const wrapper = {
  small: "420px",
  medium: "640px",
  large: "1024px",
  breakout: "640px"
};

const spacing = {
  grid: "7vh",
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px"
};
const color = {
  bg: "#F8F8F8",
  bgGray: "#F9F7F7",
  primary: "#3297BF",
  gray: "#767676",
  text: "#2b2b2b",
  white: "#fff",
  red: "#FB8D90",
  pink: "#f8d0db",
  green: "#55C4B4",
  blue: "#188EFB",
  yellow: "#f4da87",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FB8D90",
  black: "#000",
  subtleHover: "#F7F7FF"
};

const font = {
  h1: "36px",
  h2: "26px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  input: "16px",
  huge: "44px"
};

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
};

themeManager
  .setName("X Theme Starter pack")
  .addFont(font)
  .addColors(color)
  .addSpacing(spacing)
  .addWrapper(wrapper)
  .addTargetSizes(targetSize)
  .addBorderRadius(borderRadius)
  .addOther("headerHeight", headerHeight)
  .addFontFamilies(fontFamily)
  .addReset(reset)
  .resetCSS();

export default themeManager.Theme;
