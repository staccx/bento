import React from "react"
import PropTypes from "prop-types"
import imageUrlBuilder from "@sanity/image-url"
import { Consumer } from "../context"
import { Image } from "@staccx/base"

const SanityImage = ({ children, image, metadata, ...props }) => {
  return (
    <Consumer>
      {({ helper }) => {
        const builder = imageUrlBuilder(helper.client)

        const img = builder.image(image)
        if (!children) {
          return <Image {...props} src={img.withOptions(props).url()} />
        }
        return children({ image: img })
      }}
    </Consumer>
  )
}

SanityImage.propTypes = {
  children: PropTypes.func,
  image: PropTypes.object
}

export default SanityImage
