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
    p.variant === "primary" ? color("primary") : color("toneDown")};
  color: ${color("white")};
  font-size: ${font("large")};
  text-decoration: none;
  padding: 0.8em 4em 0.9em;
  margin-right: 40px;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`

LinkButton.defaultProps = {
  variant: "primary",
  children: "",
  uri: ""
}

LinkButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  uri: PropTypes.string
}

export default LinkButton
