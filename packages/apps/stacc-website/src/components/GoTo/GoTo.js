import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { color } from "@staccx/theme"
import IconChevronRight from "../Icons/IconChevronRight"

const GoTo = ({ to, children }) => (
  <div>
    <GoToLink to={to}>{children}</GoToLink>
    <Icon />
  </div>
)

const GoToLink = styled(Link)`
  display: inline-block;
  font-weight: 500;
  color: ${color.primary};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${color.text};
  }
`

const Icon = styled(IconChevronRight)`
  width: 16px;
  height: 16px;
  margin-left: 6px;
`

export default GoTo
