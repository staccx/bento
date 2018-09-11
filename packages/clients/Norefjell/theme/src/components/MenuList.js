import React from "react"
import styled from "styled-components"
import { Box, Button, List } from "@staccx/base"
import {
  spacing,
  registerStyle,
  VARIANT_DEFAULT,
  ThemeComponent
} from "@staccx/theme"

const Menu = ({ menuElements, history }) => {
  return (
    <Container variant="dashboardBox">
      <List>
        {menuElements.map(menuElement => (
          <li>
            <Button
              variant="bibMenuElement"
              key={menuElement._id}
              onClick={() =>
                history.push({
                  pathname: menuElement.path,
                  state: menuElement.direction
                })
              }
            >
              <IconOuter>{menuElement.icon}</IconOuter>
              <ButtonLabel>{menuElement.label}</ButtonLabel>
              <ThemeComponent tagName="IconCaretRight" />
            </Button>
          </li>
        ))}
      </List>
    </Container>
  )
}

const Container = styled(Box)`
  padding: 0;
`

const IconOuter = styled.div`
  margin-right: ${spacing.small};
  margin-left: -${spacing.small};
`

const ButtonLabel = styled.span`
  flex-grow: 1;
`
export const MenuStyle = registerStyle({ [VARIANT_DEFAULT]: Menu }, "menu")
export default Menu
