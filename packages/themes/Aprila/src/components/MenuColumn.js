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
  width: ${theming.spacing.large};
  height: ${theming.spacing.large};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: ${theming.spacing.small};
`

const ButtonLabel = styled.div`
  flex-grow: 1;
  line-height: 1.3;
`
export const MenuColumnStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: MenuColumn },
  "menuColumn"
)
export default MenuColumn
