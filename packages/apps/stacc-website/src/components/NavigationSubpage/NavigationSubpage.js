import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { List, Heading, theming } from "@staccx/base"
import { dashIt } from "@staccx/formatting"

const NavigationSubpage = ({ inverted, items, name, title }) => (
  <Container>
    <ProductName level={1}>{title}</ProductName>
    {items && (
      <Navigation>
        <List>
          {items.map(item => (
            <li key={item._key}>
              <SubLink
                to={`${dashIt(name)}/${dashIt(item.title)}`}
                activeClassName="is-current"
              >
                {item.title}
              </SubLink>
            </li>
          ))}
        </List>
      </Navigation>
    )}
  </Container>
)

const Container = styled.div`
  border-top: 2px solid ${theming.color.line};
  padding-top: ${theming.spacing.small};

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    display: flex;
    justify-content: space-between;
  }
`

const ProductName = styled(Heading)`
  font-size: ${theming.font.base};
`

const Navigation = styled.nav`
  > * {
    display: flex;
    flex-wrap: wrap;

    > li:not(:last-child) {
      margin-right: ${theming.spacing.medium};
    }

    @media only screen and (min-width: ${theming.wrapper.medium}) {
      justify-content: space-between;
    }
  }
`

const SubLink = styled(NavLink)`
  text-decoration: none;
  color: ${theming.color("primaryWcag")};

  &.is-current {
    color: ${theming.color("textDark")};
  }
`

NavigationSubpage.defaultProps = {
  inverted: false
}

NavigationSubpage.propTypes = {
  inverted: PropTypes.bool,
  items: PropTypes.array,
  name: PropTypes.string.isRequired
}

export default NavigationSubpage
