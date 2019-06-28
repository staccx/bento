import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import useSanity from "./useSanity"

const SanityBlockContent = ({ blocks }) => {
  const { serializers, sanityOptions } = useSanity()
  if (!Array.isArray(blocks)) {
    return blocks
  }
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      {...sanityOptions}
    />
  )
}

export default SanityBlockContent
