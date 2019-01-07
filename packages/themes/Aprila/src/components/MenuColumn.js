import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Box, Button, List, theming } from "@staccx/base"

const MenuColumn = ({ menuElements, customer }) => {
  return (
    <Box variant="menuBox">
      <List variant="menuList">
        {menuElements.map(menuElement => (
          <li key={menuElement._id}>
            <Link
              to={{
                pathname: menuElement.path,
                state: menuElement.direction
              }}
            >
              <Button variant="bibMenuColumnElement">
                <IconOuter>{menuElement.icon}</IconOuter>
                <ButtonLabel>{menuElement.label}</ButtonLabel>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.214844 11.3555L1.71484 12.8555L7.78516 6.78516L1.71484 0.714844L0.214843 2.21484L4.78516 6.78516L0.214844 11.3555Z"
                    fill="#FF7E69"
                  />
                </svg>
              </Button>
            </Link>
          </li>
        ))}
      </List>
    </Box>
  )
}

const IconOuter = styled.div`
  background-color: ${theming.color.primary};
  width: ${theming.spacing.medium};
  height: ${theming.spacing.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: ${theming.spacing.small};
  svg {
    width: 12px;
    height: 12px;
  }
`

const ButtonLabel = styled.div`
  flex-grow: 1;
  line-height: 1.3;
  font-weight: normal;
`
export const MenuColumnStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: MenuColumn },
  "menuColumn"
)
export default MenuColumn
