import React from "react"
import PropTypes from "prop-types"
import { SanityQuery } from "@staccx/sanity"

const PageResolver = ({ type, path, children }) => {
  return (
    <SanityQuery query={`*[_type == "${type}" && path.current == "${path}"]`}>
      {({ result }) => {
        if (!result) {
          return null
        }

        const page = result[0]

        return children({ page })
      }}
    </SanityQuery>
  )
}

PageResolver.propTypes = {
  children: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
}

export default PageResolver
