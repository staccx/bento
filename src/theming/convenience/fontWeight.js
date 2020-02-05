import getProp from "../utils/getProp"

const fontWeight = weight => getProp("fontWeight", weight)

fontWeight.normal = () => fontWeight("normal")
fontWeight.bold = () => fontWeight("bold")
fontWeight.light = () => fontWeight("light")

export default fontWeight
