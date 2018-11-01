import { theming } from "@staccx/base"
import { BoxVariants } from "./variants/Box.Variants"
import { LayoutVariants } from "./variants/Layout.Variants"
import { LogoComponent } from "./components/Component.Logo"
import { ButtonVariants } from "./variants/Button.Variants"
import { ItemGroupVariants } from "./variants/ItemGroup.Variants"
import { ParagraphVariants } from "./variants/Paragraph.Variants"
import base from "./globals/base"
import { IconHalfCircleComponent } from "./icons/Icon.HalfCircle"
import { IconQuarterCircleComponent } from "./icons/Icon.QuarterCircle"
import { IconDashComponent } from "./icons/Icon.Dash"
import { DotsPatternComponent } from "./components/Component.DotsPattern"
import { HeadingVariants } from "./variants/Heading.Variants"
import { ListVariants } from "./variants/List.Variants"

const borderRadius = "0"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "1050px",
  mediumSpacingLarge: "1146px",
  large: "1050px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  gridSmall: "3.5vh",
  huge: "96px",
  large: "48px",
  medium: "24px",
  small: "12px",
  tiny: "6px",
  shadow: "4px",
  shadowLarge: "6px"
}

const color = {
  bg: "#fff",
  primary: "#101010",
  gray: "#B3B3B3",
  text: "#101010",
  white: "#fff",
  line: "#101010",
  wcag: "#777",
  disabled: "#B3B3B3",
  warning: "#FF9292",
  positive: "#57CDFF",
  negative: "#FF9292",
  black: "#000",
  green: "#22B97A",
  greenLight: "#ABECD1",
  blue: "#57CDFF",
  blueLight: "#BDEBFF",
  pink: "#FF9292",
  pinkLight: "#FFD6D6",
  apricot: "#EF8665",
  apricotLight: "#FCE7E0"
}

const font = {
  h1: "56px",
  h2: "36px",
  h25: "28px",
  h3: "24px",
  h4: "18px",
  h5: "18px",
  h6: "18px",
  base: "18px",
  tiny: "12px",
  input: "18px"
}

const fontWeight = {
  bold: 600,
  normal: 400,
  light: 300
}

const fontFamily = {
  heading: "IBM Plex Mono",
  body: "IBM Plex Sans"
}

const webfonts = {
  google: {
    families: ["IBM Plex Sans:400", "IBM Plex Mono:300,400,600"]
  }
}

export default new theming.Theme({
  name: "WasteIQ",
  webfonts,
  font,
  color,
  fontWeight,
  wrapper,
  targetSize,
  borderRadius,
  fontFamily,
  spacing
})
  .add(theming.createGlobal({ resets: theming.cssResets, base })) // Globals
  .add([LogoComponent, DotsPatternComponent]) // Components
  .add([IconHalfCircleComponent, IconQuarterCircleComponent, IconDashComponent]) // Icons
  .add([
    BoxVariants,
    LayoutVariants,
    ButtonVariants,
    ItemGroupVariants,
    ParagraphVariants,
    HeadingVariants,
    ListVariants
  ]) // Variants
