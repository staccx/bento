import getProp from "./getProp"

const targetSize = (size = "normal") => getProp("targetSize", size)

targetSize.small = () => targetSize("small")
targetSize.normal = () => targetSize()

export default targetSize
