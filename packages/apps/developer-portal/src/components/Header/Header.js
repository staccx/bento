import React from "react"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"

const Header = ({ children, classname }) => (
  <HeaderComp className={classname}>{children}</HeaderComp>
)

const HeaderComp = styled.div`
  height: ${spacing("largePlus")};
  border-bottom: 1px solid ${color.line};
  width: 100%;
`

export default Header
