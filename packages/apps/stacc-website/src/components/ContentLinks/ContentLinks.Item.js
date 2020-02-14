import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, theming } from "@staccx/base"
import { SanityDocument } from "@staccx/sanity"
import IconArrowRight from "../Icons/IconArrowRight"

export const getLinkItem = linkBlock => {
  return linkBlock.link.map(link => {
    if (link.url) {
      return (
        <ContentLinksItem
          key={link._ref}
          heading={linkBlock.title}
          url={link.url}
          body={linkBlock.body}
        />
      )
    }
    if (link._ref) {
      return (
        <SanityDocument
          id={link._ref}
          pick={"title, path, body"}
          key={link._ref}
        >
          {({ document }) => {
            if (!document) {
              return null
            }
            return (
              <ContentLinksItem
                key={link._ref}
                heading={linkBlock.title}
                body={linkBlock.body}
                url={`${document.path.current}`}
              />
            )
          }}
        </SanityDocument>
      )
    }
    return null
  })
}

const ContentLinksItem = ({ heading, body, url }) => {
  if (url.startsWith("http")) {
    return (
      <Item>
        <ItemA href={url}>
          <ItemHeading level={3}>{heading}</ItemHeading>
          {"\u00a0"}
          <Icon />
        </ItemA>
        {body && <p>{body}</p>}
      </Item>
    )
  }
  return (
    <Item>
      <ItemLink to={url}>
        <ItemHeading level={3}>{heading}</ItemHeading>
        {"\u00a0"}
        <Icon />
      </ItemLink>
      {body && <p>{body}</p>}
    </Item>
  )
}

const Item = styled.div``

const ItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  align-items: center;
  margin-bottom: ${theming.spacing.tiny};
  color: ${theming.color("primaryWcag")};
  transition: color 0.2s ease;
  white-space: nowrap;

  > *:last-child {
    margin-left: ${theming.spacing.tiny};
  }

  &:hover,
  &:active,
  &:focus {
    color: ${theming.color.text};
  }
`

const ItemA = ItemLink.withComponent("a")

const ItemHeading = styled(Heading)`
  display: inline;
  color: currentColor;
  white-space: initial;
`

const Icon = styled(IconArrowRight)`
  display: inline-block;
  vertical-align: unset;
`

ContentLinksItem.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default ContentLinksItem