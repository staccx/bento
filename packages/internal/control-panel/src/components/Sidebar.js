import React from "react"
import { Link } from "react-router-dom"
import { theming } from "@staccx/base"
import styled from "styled-components"

const Sidebar = () => (
  <SidebarList>
    <li>
      <SidebarLink to="/">
        <img src="/" alt="bento" />
      </SidebarLink>
    </li>
    {/* <li>
        <SidebarLink to="/alerts">
          <Alerts />
        </SidebarLink>
      </li> */}
    <li>
      <SidebarLink to="/settings">Noe her</SidebarLink>
    </li>
    <li>
      <SidebarLink to="/profile">Noer her</SidebarLink>
    </li>
  </SidebarList>
)

const SidebarList = styled.ul`
  grid-area: sidebar;
  background-color: ${theming.color.black};
  color: ${theming.color.white};
  padding: ${theming.spacing.small};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  > *:first-child {
    flex-grow: 1;
  }
`

const SidebarLink = styled(Link)`
  opacity: 0.5;
  height: ${theming.targetSize.normal};
  display: inline-block;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

export default Sidebar
