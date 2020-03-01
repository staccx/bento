import { componentCreateFactory } from "./createVariantsFunctionFactory"
import Alert from "../../components/Alert/Alert"
import { themes, Theme } from "../index"

let createVariants = () => null
describe("createVariants Function Factory", () => {
  beforeAll(() => {
    createVariants = componentCreateFactory(Alert)
  })
  beforeEach(() => {
    themes._default = new Theme()
  })
  it("Default theme", () => {
    createVariants({
      alert: {
        test: "test"
      }
    })

    expect(themes._default.hasOwnProperty(Alert.themeProps.alert.name))
  })

  it("Multiple themes", () => {
    createVariants({
      alert: {
        theme: "default"
      }
    })
    const theme1 = themes._default
    expect(theme1.hasOwnProperty(Alert.themeProps.alert.name))
    expect(theme1[Alert.themeProps.alert.name]).toStrictEqual({
      theme: "default"
    })

    createVariants(
      {
        alert: {
          theme: "different"
        }
      },
      "myTheme"
    )

    const myTheme = themes.myTheme
    expect(myTheme).not.toBeNull()
    expect(myTheme.hasOwnProperty(Alert.themeProps.alert.name))

    expect(myTheme[Alert.themeProps.alert.name]).toStrictEqual({
      theme: "different"
    })

    createVariants(
      {
        alert: {
          secondary: "something else entirly"
        }
      },
      "myTheme"
    )

    expect(myTheme[Alert.themeProps.alert.name]).toStrictEqual({
      theme: "different",
      secondary: "something else entirly"
    })
  })

  it("Doesnt work without a component", () => {
    expect(componentCreateFactory(null)).toThrow()
  })

  it("Component must have themeprops", () => {
    expect(componentCreateFactory({})).toThrow()
  })

  it("Should not work without variants", () => {
    expect(createVariants).toThrow() // will call function without parameters
  })
})
