import getProp from "../utils/getProp"

const spacing = size => getProp("spacing", size)

/**
 * @deprecated Use spacing`micro`
 * @return {function(...[*]=)}
 */
spacing.micro = () => getProp("spacing", "micro")
/**
 * @deprecated Use color`tiny`
 * @return {function(...[*]=)}
 */
spacing.tiny = () => getProp("spacing", "tiny")
/**
 * @deprecated Use color`small`
 * @return {function(...[*]=)}
 */
spacing.small = () => getProp("spacing", "small")
/**
 * @deprecated Use color`medium`
 * @return {function(...[*]=)}
 */
spacing.medium = () => getProp("spacing", "medium")
/**
 * @deprecated Use color`mediumPlus`
 * @return {function(...[*]=)}
 */
spacing.mediumPlus = () => getProp("spacing", "mediumPlus")
/**
 * @deprecated Use color`large`
 * @return {function(...[*]=)}
 */
spacing.large = () => getProp("spacing", "large")
/**
 * @deprecated Use color`huge`
 * @return {function(...[*]=)}
 */
spacing.huge = () => getProp("spacing", "huge")

export default spacing
