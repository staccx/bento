import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { List, Heading } from "@staccx/base"
import { spacing, color, font } from "@staccx/theme"

const NavigationSubpage = ({ inverted }) => (
  <Container>
    <ProductName level={1}>Stacc Core</ProductName>
    <Navigation>
      <List>
        <li>
          <SubLink to="features/" activeClassName="is-current">
            Features
          </SubLink>
        </li>
        <li>
          <SubLink to="use-cases/" activeClassName="is-current">
            Use cases
          </SubLink>
        </li>
        <li>
          <SubLink to="technical-details/" activeClassName="is-current">
            Technical-details
          </SubLink>
        </li>
      </List>
    </Navigation>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.small};
  border-top: 2px solid ${color.line};
  padding-top: ${spacing.small};
`

const ProductName = styled(Heading)`
  font-size: ${font.base};
`

const Navigation = styled.nav`
  > * {
    display: flex;
    justify-content: space-between;

    > li:not(:last-child) {
      margin-right: ${spacing.medium};
    }
  }
`

const SubLink = styled(NavLink)`
  text-decoration: none;
  color: ${color.primary};

  &.is-current {
    color: ${color.text};
  }
`

NavigationSubpage.defaultProps = {}

NavigationSubpage.propTypes = {}

export default NavigationSubpage
