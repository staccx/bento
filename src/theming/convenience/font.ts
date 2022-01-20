import getProp from "../utils/getProp"

const font = size => getProp("font", size)

font.h1 = () => font("h1")
font.h2 = () => font("h2")
font.h3 = () => font("h3")
font.h4 = () => font("h4")
font.h5 = () => font("h5")
font.h6 = () => font("h6")
font.base = () => font("base")
font.tiny = () => font("tiny")
font.input = () => font("input")
font.huge = () => font("huge")
font.lineHeight = () => font("lineHeight")

export default font
