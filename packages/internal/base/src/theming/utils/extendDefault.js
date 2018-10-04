import createVariants from "./createVariants"
import { VARIANT_DEFAULT } from "../_constants"

/**
 * Use this to extend default styling
 * @param style
 * @returns {{}}
 */
export default (styling, style) =>
  createVariants({ [VARIANT_DEFAULT]: styling }, style)
