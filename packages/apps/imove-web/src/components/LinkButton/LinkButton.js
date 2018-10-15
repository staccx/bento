import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, font, spacing, wrapper } from "@staccx/theme"

const LinkButton = ({ variant, children, url }) => (
  <Link href={url} variant={variant}>
    {children}
  </Link>
)

const Link = styled.a`
  display: inline-block;
  background-color: ${p =>
    p.variant === "primary" ? color("primary") : "transparent"};
  border: ${p =>
    p.variant === "primary" ? "none" : `3px solid ${color("primary")(p)}`};
  color: ${p => (p.variant === "primary" ? color("white") : color("primary"))};
  font-size: ${font("input")};
  text-decoration: none;
  text-align: center;
  min-width: 185px;
  padding: 0.6em 2em 0.7em;
  &:not(:last-child) {
    margin-right: ${spacing("smallWhitespace")};
  }
  @media only screen and (max-width: ${wrapper("large")}) {
    min-width: 150px;
    padding: 0.4em 1.9em 0.5em;
  }
`

LinkButton.defaultProps = {
  variant: "primary"
}

LinkButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired
}

export default LinkButton
