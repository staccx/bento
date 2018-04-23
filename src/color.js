import getProp from "./getProp";

const color = c => getProp("color", c);

color.white = () => color("white")
color.bg = () => color("bg")
color.subtleHover = () => color("subtleHover")
color.bgGray = () => color("bgGray")
color.line = () => color("line")
color.gray = () => color("gray")
color.wcag = () => color("wcag")
color.disabled = () => color("disabled")
color.primary = () => color("primary")
color.secondary = () => color("secondary")
color.text = () => color("text")
color.negative = () => color("negative")
color.positive = () => color("positive")
color.warning = () => color("warning")
color.black = () => color("black")
color.green = () => color("green")

export default color