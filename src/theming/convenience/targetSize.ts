import getProp from "../utils/getProp"

const targetSize = (size = "normal") => getProp("targetSize", size)

targetSize.small = () => targetSize("small")
targetSize.normal = () => targetSize("normal")

export default targetSize
