import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const SanityBlockContent = ({ blocks, serializers }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
)

export default SanityBlockContent
