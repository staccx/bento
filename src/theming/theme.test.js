import Theme from "./Theme"
import { theme as instance } from "./"
import Alert from "../components/Alert/Alert"
import createVariants from "./utils/createVariants"
// import grids from "../components/Layout/Layout/Layout.Grids"

const example = {
  name: "Test theme",
  spacing: {
    huge: "96px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px",
    micro: "3px"
  },
  wrapper: {
    small: "420px",
    medium: "640px",
    large: "1024px",
    breakout: "640px"
  },
  color: {
    white: "#fff",
    bg: "#fff",
    subtleHover: "#F7F7FF",
    bgGray: "#f7f7ff",
    line: "#EBEBF2",
    gray: "#767676",
    wcag: "#777",
    disabled: "#BABABA",
    primary: "#00a190",
    secondary: "#F5A623",
    text: "#2b2b2b",
    negative: "#ea526f",
    positive: "#4A90E2",
    warning: "#c54059",
    black: "#000",
    green: "#00a190", // for toggle eks
    link: "#279AF1"
  },
  fontFamily: {
    heading: "sans-serif",
    body: "sans-serif"
  },
  font: {
    h1: "36px",
    h2: "26px",
    h3: "22px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
    base: "14px",
    tiny: "12px",
    input: "16px",
    huge: "44px",
    lineHeight: "1.5"
  },
  fontWeight: {
    bold: "bold",
    normal: "normal",
    light: "lighter"
  },
  targetSize: {
    small: "36px",
    normal: "44px"
  },
  borderRadius: "2px"
}

const other = {
  name: "Alternate theme",
  spacing: {
    huge: "72px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px",
    micro: "3px"
  },
  wrapper: {
    small: "420px",
    medium: "640px",
    large: "1024px",
    breakout: "640px"
  }
}

const style1 = createVariants({ subtle: 1 }, "button")
const style2 = createVariants({ _default: "test" }, "label")

describe("Theme", () => {
  describe("Tests", () => {
    it("Should create new theme", () => {
      const theme = new Theme(example, {})
      expect(theme).toEqual(example)
    })
    it("Should be able to add new things", () => {
      const theme = new Theme(example, {})
      const alteredTheme = theme.add({ button: { subtle: 1 } })
      expect(alteredTheme.button.subtle).toEqual(1)
      // Verify exisiting prop
      expect(alteredTheme.font.tiny).toEqual("12px")
    })
    it("Should be able to take merge two", () => {
      const theme = new Theme(example, other)
      expect(theme.spacing.huge).toBe(other.spacing.huge)
      // Second parameter has priority
      expect(theme.name).toBe(other.name)
    })

    it("Should take array of new styles", () => {
      const theme = new Theme(example).add([style1, style2])
      expect(theme.button.subtle).toEqual(1)
      expect(theme.label._default).toEqual("test")
    })

    it("instance", () => {
      instance.append(style1)

      expect(instance.button).not.toBeNull()
      expect(instance.button).toStrictEqual({ subtle: 1 })
      expect(instance.label).toBeUndefined()

      instance.append(style2)
      expect(instance.label).toStrictEqual({ _default: "test" })
    })

    it("Themeprop creating", () => {
      Alert.createVariants({
        alert: {
          scream: "test"
        }
      })
      expect(instance[Alert.themeProps.alert.name]).toStrictEqual({
        scream: "test"
      })
    })
  })
})
