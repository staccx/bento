import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { Image } from "@staccx/base"
import useSanity from "./useSanity"

const SanityImage = ({ children, image, options, ...props }) => {
  const { getImageUrl } = useSanity()

  const url = getImageUrl(image, options)

  return useMemo(() => {
    console.log("Rerendering image", url)
    if (!children) {
      return <Image {...props} src={url} />
    }
    return children(url)
  }, [url])
}

SanityImage.propTypes = {
  children: PropTypes.func,
  image: PropTypes.object
}

export default SanityImage
