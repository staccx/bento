import createVariants from "./createVariants"
import { VARIANT_DEFAULT } from "../../constants/themeContants"

/**
 * Use this to extend default styling
 * @param style
 * @returns {{}}
 */
export default (styling, style) =>
  createVariants({ [VARIANT_DEFAULT]: styling }, style)
