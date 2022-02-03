export function createVariants(variants: any, style: any) {
  const name = style && style.hasOwnProperty("name") ? style.name : style
  return {
    [name]: {
      ...variants
    }
  }
}
