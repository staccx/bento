import React from "react"
import styled from "styled-components"
import { Box, Button, List, theming } from "@staccx/base"

const MenuColumn = ({ menuElements, history }) => {
  return (
    <Box variant="menuBox">
      <List variant="menuList">
        {menuElements.map(menuElement => (
          <li key={menuElement._id}>
            <Button
              variant="bibMenuColumnElement"
              onClick={() =>
                history.push({
                  pathname: menuElement.path,
                  state: menuElement.direction
                })
              }
            >
              <IconOuter>{menuElement.icon}</IconOuter>
              <ButtonLabel>{menuElement.label}</ButtonLabel>
            </Button>
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
