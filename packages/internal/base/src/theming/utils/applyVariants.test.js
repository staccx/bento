import { css } from "styled-components"
import applyVariants from "./applyVariants"
import themePropTypes from "../../components/constants/themePropTypes"

const themeProps = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  }
}

const props = {
  theme: {
    Button: {
      _default: css`
        color: blue;
      `,
      custom: css`
        color: red;
      `
    },
    Label: {
      _default: css`
        color: white;
      `,
      custom: css`
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
