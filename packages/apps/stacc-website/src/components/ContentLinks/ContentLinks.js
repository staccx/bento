import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, wrapper } from "@staccx/theme"

const ContentLinks = ({ children }) => {
  return <Links>{children}</Links>
}

const Links = styled.div`
  display: grid;
  grid-row-gap: ${spacing.large};
  grid-column-gap: ${spacing.huge};

  @media only screen and (min-width: ${wrapper.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`

ContentLinks.propTypes = {
  children: PropTypes.any.isRequired
}

export default ContentLinks
