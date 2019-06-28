import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { applyVariants, font, fontFamily, spacing, color } from "../../theming"
import { themePropTypes } from "../../constants/themeContants"

const tinycolor = require("tinycolor2")

const Breadcrumb = ({ path, ...restProps }) => (
  <BreadcrumbEl {...restProps}>
    {path.map((item, index, arr) =>
      arr.length !== index + 1 ? (
        <Item key={`${item.name}_${index}`} variant={restProps.variant}>
          <Link href={item.to} variant={restProps.variant}>
            <div>{item.name}</div>
          </Link>
        </Item>
      ) : (
        <Item key={`${item.name}_${index}`} variant={restProps.variant}>
          <LastItemContent>
            <div>{item.name}</div>
          </LastItemContent>
        </Item>
      )
    )}
  </BreadcrumbEl>
)

Breadcrumb.themeProps = {
  main: {
    name: "BREADCRUMB_CONTAINER",
    description:
      "The main <ol> element, which also contains custom CSS properties.",
    type: themePropTypes.style
  },
  listItem: {
    name: "BREADCRUMB_ITEM",
    description: "One <li> list item.",
    type: themePropTypes.style
  },
  itemAnchor: {
    name: "BREADCRUMB_LINK",
    description:
      "Item <a> tag. Will also apply to the last item, which uses a <div>.",
    type: themePropTypes.style
  },
  itemText: {
    name: "BREADCRUMB_TEXT",
    description: "Item inner <div>.",
    type: themePropTypes.style
  }
}

const BreadcrumbEl = styled.ol`
  /* -- sizes -- */
  --item-h-padding: ${spacing.small};
  --item-v-padding: ${spacing.tiny};
  --line-px-height: 24px;
  --item-distance: 4px;
  --bottom-spacing: 3px; /* bottom spacing – only visible when breadcrumb wraps */
  --separators: 14px; /* distance between items */
  --end-padding: 6px; /* extra padding on the ends */
  --full-width: 0; /* set to 1 for full width */

  /* -- colors -- */
  --col-bg: #ddd;
  --col-txt: ${p =>
    tinycolor
      .mostReadable("#ddd", ["#333"], {
        includeFallbackColors: true,
        level: "AAA",
        size: "small"
      })
      .toString()};
  --col-hover-bg: ${color.primary};
  --col-hover-txt: ${color.white};
  --col-current-bg: ${color.primary};
  --col-current-txt: ${p =>
    tinycolor
      .mostReadable(color.primary()(p), ["#333", "#fff"], {
        includeFallbackColors: false,
        level: "AA",
        size: "small"
      })
      .toString()};

  /* -- calculations -- */
  --height: calc(var(--line-px-height) + var(--item-v-padding) * 2);

  /* -- styling -- */
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  user-select: none;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(var(--bottom-spacing) * -1);

  ${applyVariants(Breadcrumb.themeProps.main)};
`

const Item = styled.li`
  background-color: var(--col-bg);
  color: var(--col-txt);
  margin-left: var(--separators);
  margin-right: var(--item-distance);
  margin-bottom: var(--bottom-spacing);
  flex-grow: var(--full-width);

  &:hover a {
    border-color: var(--col-hover-bg);
  }

  &:not(:last-child):hover {
    background-color: var(--col-hover-bg);
    color: var(--col-hover-txt);
  }

  &:first-child {
    margin-left: 0;

    a {
      padding-left: var(--end-padding);
      ::before {
        content: none;
      }
    }
  }

  &:last-child {
    cursor: default;
    margin-right: 0;
    background-color: var(--col-current-bg);
    color: var(--col-current-txt);

    > div {
      border-color: var(--col-current-bg);
      padding-right: var(--end-padding);
    }

    ${applyVariants(Breadcrumb.themeProps.listItemLast)};
  }

  ${applyVariants(Breadcrumb.themeProps.listItem)}
`

const linkStyle = css`
  display: block;
  text-decoration: none;
  color: inherit;
  border-color: var(--col-bg);
  position: relative;

  ${Item}:not(:first-child) &::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    border: var(--separators) solid;
    border-color: inherit;
    border-left-color: transparent;
    border-top-width: calc(var(--height) / 2);
    border-bottom-width: calc(var(--height) / 2);
    border-right-width: 0;
    box-sizing: border-box;
    left: calc(var(--separators) * -1);
    z-index: -1;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: var(--line-px-height);
    padding: var(--item-v-padding) var(--item-h-padding);
    white-space: nowrap;

    ${applyVariants(Breadcrumb.themeProps.itemText)};
  }

  ${applyVariants(Breadcrumb.themeProps.itemAnchor)};
`

const Link = styled.a`
  ${linkStyle};
  ::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    border: var(--separators) solid transparent;
    border-left-color: inherit;
    border-top-width: calc(var(--height) / 2);
    border-bottom-width: calc(var(--height) / 2);
    border-right-width: 0;
    box-sizing: border-box;
    top: 0;
    right: calc(var(--separators) * -1);
  }
`

const LastItemContent = styled.div`
  ${linkStyle};
`

Breadcrumb.propTypes = {
  path: PropTypes.array.isRequired
}

export default Breadcrumb
