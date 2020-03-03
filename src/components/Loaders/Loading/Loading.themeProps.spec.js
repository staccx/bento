import themeProps from "./Loading.themeProps"
import { theme as instance } from "../../../theming"
import Loading from "./Loading"

describe("Loading", () => {
  describe("Theme props", () => {
    it("component", () => {
      expect(themeProps.component).not.toBeNull()
      expect(Loading.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Loading.createVariants({
        component: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.component.name)).toBe(true)
      expect(instance[themeProps.component.name].myVariant).toEqual(style)
    })
    it("loading", () => {
      expect(themeProps.loading).not.toBeNull()
      expect(Loading.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Loading.createVariants({
        loading: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.loading.name)).toBe(true)
      expect(instance[themeProps.loading.name].myVariant).toEqual(style)
    })
  })
})
