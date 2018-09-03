import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ItemGroup } from "@staccx/base"

const ContentLinks = ({ children }) => {
  return <Links>{children}</Links>
}

const Links = styled(ItemGroup)`
  > div {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

ContentLinks.propTypes = {
  children: PropTypes.any.isRequired
}

export default ContentLinks
