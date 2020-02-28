import themeProps from "./CheckBox.themeProps"
import { theme as instance } from "../../../theming"
import CheckBox from "./CheckBox"

describe("CheckBox", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      CheckBox.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
    it("labelBefore", () => {
      expect(themeProps.labelBefore).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        labelBefore: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.labelBefore.name)).toBe(true)
      expect(instance[themeProps.labelBefore.name].myVariant).toEqual(style)
    })
    it("labelChecked", () => {
      expect(themeProps.labelChecked).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        labelChecked: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.labelChecked.name)).toBe(true)
      expect(instance[themeProps.labelChecked.name].myVariant).toEqual(style)
    })
    it("labelBeforeChecked", () => {
      expect(themeProps.labelBeforeChecked).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        labelBeforeChecked: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.labelBeforeChecked.name)).toBe(
        true
      )
      expect(instance[themeProps.labelBeforeChecked.name].myVariant).toEqual(
        style
      )
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(CheckBox.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      CheckBox.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
