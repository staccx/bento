import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const SanityRichText = ({ blocks, serializers = {} }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />
}

export default SanityRichText
