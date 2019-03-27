import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import {
  applyVariants,
  font,
  fontFamily,
  fontWeight,
  spacing,
  color
} from "../../theming"
import { themePropTypes } from "../../constants/themeContants"

const tinycolor = require("tinycolor2")

const Breadcrumb = ({ path }) => (
  <List>
    {path.map(pathItem =>
      pathItem.to ? (
        <Item key={pathItem.name}>
          <ItemButton to={pathItem.to}>{pathItem.name}</ItemButton>
        </Item>
      ) : (
        <ItemCurrent key={pathItem.name}>
          <ItemHeading key={pathItem.name}>{pathItem.name}</ItemHeading>
        </ItemCurrent>
      )
    )}
  </List>
)

Breadcrumb.themeProps = {
  container: {
    name: "BREADCRUMB_CONTAINER",
    description:
      "The container for the crumbs, which also contains custom CSS properties.",
    type: themePropTypes.style
  },
  item: {
    name: "BREADCRUMB_ITEM",
    description: "One single item.",
    type: themePropTypes.style
  },
  itemCurrent: {
    name: "BREADCRUMB_CURRENT_ITEM",
    description: "Active breadcrumb item.",
    type: themePropTypes.style
  },
  itemButton: {
    name: "ITEM_BUTTON",
    description: "The clickable elements in the single item.",
    type: themePropTypes.style
  },
  itemHeading: {
    name: "ITEM_HEADING",
    description: "The non-clickable element in the current item.",
    type: themePropTypes.style
  }
}

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  font-size: ${font.base};
  font-family: ${fontFamily.body};
  font-weight: ${fontWeight.normal};

  /* Custom CSS properties – use for customization: */

  --max-width: 150px;
  --bg-color: ${color.white};
  --color: ${color.black};
  --hover-bg-color: ${p =>
    tinycolor(color.primary()(p))
      .darken(0)
      .toString()};
  --hover-color: ${p =>
    tinycolor
      .mostReadable(tinycolor(color.primary()(p)).darken(0), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
  --active-bg-color: ${color.primary};
  --active-color: ${color.white};
  --sep-width: 18px;
  --distance: 3px;
  --line-height: ${font.base};
  --padding-ver: ${spacing.small};
  --padding-hor: ${spacing.small};

  /* Calculations – leave alone: */

  ---height: calc(var(--line-height) + var(--padding-ver) * 2);
  ---push: calc(var(--sep-width) + var(--distance));

  ${applyVariants(Breadcrumb.container)};
`

const itemStyle = css`
  background: var(--bg-color);
  margin-left: var(---push);
  white-space: nowrap;
  position: relative;

  :first-child {
    margin-left: 0;
    > * {
      padding-left: calc(var(--padding-hor) + var(--sep-width) * 0.5);
      ::before {
        content: none;
      }
    }
  }

  :last-child > * {
    padding-right: calc(var(--padding-hor) + var(--sep-width) * 0.5);
    ::after {
      content: none;
    }
  }

  :last-child:not(:only-child)::before {
    border-color: var(--active-bg-color);
    border-left-color: transparent;
  }
`

const Item = styled.li`
  ${itemStyle};
  ${applyVariants(Breadcrumb.item)};
`

const ItemCurrent = styled(Item)`
  ${itemStyle};

  /* Unique for ItemCurrent: */
  ${applyVariants(Breadcrumb.itemCurrent)};
`

const itemInsideStyle = css`
  display: block;
  text-decoration: none;
  max-width: var(--max-width);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: var(--line-height);
  color: var(--color);
  padding: var(--padding-ver) var(--padding-hor);
  text-align: center;

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: calc(var(--sep-width) * -1);
    border: var(--sep-width) solid var(--bg-color);
    border-left-color: transparent;
    border-width: calc(var(---height) / 2) var(--sep-width);
    z-index: -1;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: calc(var(--sep-width) * -2);
    border: var(--sep-width) solid transparent;
    border-left-color: var(--bg-color);
    border-width: calc(var(---height) / 2) var(--sep-width);
  }

  :hover,
  :focus {
    outline: none;
    background-color: var(--hover-bg-color);
    color: var(--hover-color);
    text-decoration: none;
    ::before {
      border-color: var(--hover-bg-color);
      border-left-color: transparent;
    }
    ::after {
      border-left-color: var(--hover-bg-color);
    }
  }
`

const ItemButton = styled.a`
  ${itemInsideStyle};
  ${applyVariants(Breadcrumb.themeProps.itemButton)};
`

const ItemHeading = styled.h1`
  ${itemInsideStyle};

  /* Unique for ItemHeading: */

  &,
  :hover {
    background-color: var(--active-bg-color);
    color: var(--active-color);
    ::before {
      border-top-color: var(--active-bg-color);
      border-bottom-color: var(--active-bg-color);
    }
    ::after {
      border-left-color: var(--active-bg-color);
    }
  }

  ${applyVariants(Breadcrumb.themeProps.itemHeading)};
`

Breadcrumb.propTypes = {
  path: PropTypes.array
}

export default Breadcrumb
