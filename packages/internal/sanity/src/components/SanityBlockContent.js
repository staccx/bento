import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const SanityBlockContent = ({ blocks, serializers }) => {
  if (!Array.isArray(blocks)) {
    return blocks
  }
  return <BlockContent blocks={blocks} serializers={serializers} />
}

export default SanityBlockContent
