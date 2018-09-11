import React from "react"
import PropTypes from "prop-types"
import { SanityImage } from "@staccx/sanity"
import { Helmet } from "react-helmet"

const Meta = ({ meta }) => {
  if (!meta) {
    return null
  }
  return (
    <SanityImage image={meta.image}>
      {({ image }) => (
        <Helmet>
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={meta.url.current} />
          <meta property="og:image" content={image.url()} />
        </Helmet>
      )}
    </SanityImage>
  )
}

Meta.propTypes = {
  meta: PropTypes.object.isRequired
}

export default Meta
