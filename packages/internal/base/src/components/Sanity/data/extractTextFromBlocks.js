const extractTextFromBlocks = (blocks = []) =>
  blocks
    .filter(val => val._type === "block")
    .map(block =>
      block.children
        .filter(child => child._type === "span")
        .map(span => span.text)
        .join("")
    )
    .join("")

export default extractTextFromBlocks
