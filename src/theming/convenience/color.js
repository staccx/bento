import getProp from "../utils/getProp"

const color = c => getProp("color", c)

/**
 * @deprecated Use color`white`
 * @return {function(...[*]=)}
 */
color.white = () => color("white")
/**
 * @deprecated Use color`bg`
 * @return {function(...[*]=)}
 */
color.bg = () => color("bg")
/**
 * @deprecated Use color`subtleHover`
 * @return {function(...[*]=)}
 */
color.subtleHover = () => color("subtleHover")
/**
 * @deprecated Use color`bgGray`
 * @return {function(...[*]=)}
 */
color.bgGray = () => color("bgGray")
/**
 * @deprecated Use color`line`
 * @return {function(...[*]=)}
 */
color.line = () => color("line")
/**
 * @deprecated Use color`gray`
 * @return {function(...[*]=)}
 */
color.gray = () => color("gray")
/**
 * @deprecated Use color`wcag`
 * @return {function(...[*]=)}
 */
color.wcag = () => color("wcag")
/**
 * @deprecated Use color`disabled`
 * @return {function(...[*]=)}
 */
color.disabled = () => color("disabled")
/**
 * @deprecated Use color`primary`
 * @return {function(...[*]=)}
 */
color.primary = () => color("primary")
/**
 * @deprecated Use color`secondary`
 * @return {function(...[*]=)}
 */
color.secondary = () => color("secondary")
/**
 * @deprecated Use color`text`
 * @return {function(...[*]=)}
 */
color.text = () => color("text")
/**
 * @deprecated Use color`negative`
 * @return {function(...[*]=)}
 */
color.negative = () => color("negative")
/**
 * @deprecated Use color`positive`
 * @return {function(...[*]=)}
 */
color.positive = () => color("positive")
/**
 * @deprecated Use color`warning`
 * @return {function(...[*]=)}
 */
color.warning = () => color("warning")
/**
 * @deprecated Use color`black`
 * @return {function(...[*]=)}
 */
color.black = () => color("black")
/**
 * @deprecated Use color`green`
 * @return {function(...[*]=)}
 */
color.green = () => color("green")
/**
 * @deprecated Use color`link`
 * @return {function(...[*]=)}
 */
color.link = () => color("link")

export default color
