import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theming } from "@staccx/base"

const ContentLinks = ({ children }) => {
  return <Links>{children}</Links>
}

const Links = styled.div`
  display: grid;
  grid-row-gap: ${theming.spacing.large};
  grid-column-gap: ${theming.spacing.huge};

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`

ContentLinks.propTypes = {
  children: PropTypes.any.isRequired
}

export default ContentLinks
