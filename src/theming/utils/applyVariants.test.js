import applyVariants from "./applyVariants"
import { themePropTypes } from "../themeContants"

const themeProps = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  },
  noName: {
    name: null,
    description: "no name description",
    type: themePropTypes.style
  }
}

const props = {
  theme: {
    Button: {
      _default: `
        color: blue;
      `,
      custom: `
        color: red;
      `
    },
    Label: {
      _default: `
        color: white;
      `,
      custom: `
        color: palegoldenrod;
      `
    }
  }
}

const buttonVariansFunction = applyVariants(themeProps.button)
describe("Apply Variants", () => {
  describe("String", () => {
    it("Good defaults", () => {
      expect(buttonVariansFunction(props)).toEqual(props.theme.Button._default)
    })
    it("With prop", () => {
      expect(
        buttonVariansFunction({
          ...props,
          variant: "custom"
        })
      ).toEqual(props.theme.Button.custom)
    })

    it("No name", () => {
      const variantFunc = applyVariants(themeProps.noName)
      expect(variantFunc({ ...props, variant: "test" })).toBeNull()
    })

    it("No themeprops", () => {
      const variantFunc = applyVariants(null)
      expect(variantFunc({ ...props, variant: "test" })).toBeNull()
    })
    it("Invalid variant type", () => {
      const variantFunc = applyVariants(themeProps.button)
      expect(variantFunc({ ...props, variant: 12 })).toBeNull()
    })

    it("No theme!", () => {
      const variantFunc = applyVariants(themeProps.button)
      expect(variantFunc({ variant: "variant" })).toBeNull()
    })
  })

  describe("Array", () => {
    it("Array prop. Single element", () => {
      expect(
        buttonVariansFunction({
          ...props,
          variant: ["custom"]
        })
      ).toEqual([props.theme.Button.custom])
    })
    it("Multiple elements", () => {
      expect(
        buttonVariansFunction({
          ...props,
          variant: ["custom", "_default"]
        })
      ).toEqual([props.theme.Button.custom, props.theme.Button._default])
    })
  })

  describe("Function", () => {
    it("Use function", () => {
      expect(
        buttonVariansFunction({
          ...props,
          variant: ({ theme, name }) => {
            expect(theme).toEqual(props.theme)
            expect(name).toBe("Button")

            return "custom"
          }
        })
      ).toEqual(props.theme.Button.custom)
    })
  })

  describe("Object", () => {
    it("Use object", () => {
      expect(
        buttonVariansFunction({
          ...props,
          variant: {
            Button: "_default",
            Label: "custom"
          }
        })
      ).toEqual([props.theme.Button._default, props.theme.Label.custom])
    })
  })
})
