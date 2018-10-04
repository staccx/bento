import getProp from "../utils/getProp"

const wrapper = size => getProp("wrapper", size)

wrapper.small = () => wrapper("small")
wrapper.medium = () => wrapper("medium")
wrapper.large = () => wrapper("large")
wrapper.breakout = () => wrapper("breakout")

export default wrapper
