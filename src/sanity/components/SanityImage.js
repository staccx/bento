import React, { useMemo } from "react"
import PropTypes from "prop-types"
import Image from "../../components/Image/Image"
import useSanity from "./useSanity"

const SanityImage = ({ children, image, options, ...props }) => {
  const { getImageUrl } = useSanity()

  const url = getImageUrl(image, options)

  return useMemo(() => {
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
