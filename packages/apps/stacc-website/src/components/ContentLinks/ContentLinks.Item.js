import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { color, spacing } from "@staccx/theme"
import { Heading } from "@staccx/base"
import IconArrowRight from "../Icons/IconArrowRight"

const ContentLinksItem = ({ heading, body, url }) => {
  return (
    <Item>
      <ItemLink to={url}>
        <ItemHeading level={3}>{heading}</ItemHeading>
        <IconArrowRight />
      </ItemLink>
      {body && <p>{body}</p>}
    </Item>
  )
}

const Item = styled.div`
  flex-basis: calc(50% - ${spacing.large} - ${spacing.medium});
  margin-bottom: ${spacing.medium};
`

const ItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  > *:last-child {
    margin-left: ${spacing.small};
  }
`

const ItemHeading = styled(Heading)`
  color: ${color.primary};
`

ContentLinksItem.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default ContentLinksItem
