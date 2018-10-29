import React from "react"
import PropTypes from "prop-types"
import imageUrlBuilder from "@sanity/image-url"
import { Consumer } from "../context"

const SanityImage = ({ children, image }) => {
  return (
    <Consumer>
      {({ helper }) => {
        const builder = imageUrlBuilder(helper.client)

        return children({ image: builder.image(image) })
      }}
    </Consumer>
  )
}

SanityImage.propTypes = {
  children: PropTypes.func.isRequired,
  image: PropTypes.object
}

export default SanityImage
