import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, font } from "@staccx/theme"

const LinkButton = ({ variant, children, uri }) => (
  <Link href={uri} variant={variant}>
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
  margin-right: 40px;
`

LinkButton.defaultProps = {
  variant: "primary"
}

LinkButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any.isRequired,
  uri: PropTypes.string.isRequired
}

export default LinkButton
