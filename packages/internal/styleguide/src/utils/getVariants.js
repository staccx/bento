import { theming } from "@staccx/base"

export default (theme, themeProps) => {
  Reflect.ownKeys(themeProps).reduce((acc, curr) => {
    const prop = themeProps[curr]

    if (theme.hasOwnProperty(prop.name)) {
      const variants = theme[prop.name]

      Reflect.ownKeys(variants).forEach(variant => {
        acc[variant] = {
          name: `${variant}`,
          value: variant,
          isOverriddenDefault: variant === theming.VARIANT_DEFAULT
        }
      }, {})
    }

    return acc
  }, {})
}
