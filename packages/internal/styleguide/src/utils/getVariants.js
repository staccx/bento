import { VARIANT_DEFAULT } from "@staccx/theme"

export default (theme, themeProps) => {
  return Reflect.ownKeys(themeProps).reduce((acc, curr) => {
    const prop = themeProps[curr]

    if (theme.hasOwnProperty(prop.name)) {
      const vars = theme[prop.name]

      Reflect.ownKeys(vars).reduce((v, k) => {
        acc[k] = {
          name: `${k}`,
          value: k,
          isOverriddenDefault: k === VARIANT_DEFAULT
        }
      }, {})
    }

    return acc
  }, {})
}
