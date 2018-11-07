import React from "react"
import styled from "styled-components"
import { Box, Button, List, ThemeComponent, theming } from "@staccx/base"

const Menu = ({ menuElements, history }) => {
  return (
    <Container variant="dashboardBox">
      <List>
        {menuElements.map(menuElement => (
          <li key={menuElement._id}>
            <Button
              variant="bibMenuElement"
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
  margin-right: ${theming.spacing.small};
  margin-left: -${theming.spacing.small};
`

const ButtonLabel = styled.span`
  flex-grow: 1;
  line-height: 1.3;
`
export const MenuStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Menu },
  "menu"
)
export default Menu
