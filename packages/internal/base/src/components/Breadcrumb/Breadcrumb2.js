import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { applyVariants, font, fontFamily, spacing, color } from "../../theming"
import { themePropTypes } from "../../constants/themeContants"

const tinycolor = require("tinycolor2")

const Breadcrumb2 = ({ path, ...restProps }) => (
  <BreadcrumbEl {...restProps}>
    {path.map((item, index, arr) =>
      arr.length !== index + 1 ? (
        <Item key={`${item.name}_${index}`}>
          <Link href={item.to}>
            <div>{item.name}</div>
          </Link>
        </Item>
      ) : (
        <Item key={`${item.name}_${index}`}>
          <LastItemContent>
            <div>{item.name}</div>
          </LastItemContent>
        </Item>
      )
    )}
  </BreadcrumbEl>
)

const BreadcrumbEl = styled.ol`
  /* -- parameters: sizes -- */
  --v-padding: ${spacing.tiny};
  --h-padding: ${spacing.small};
  --line-px-height: 24px;
  --edge: 14px;
  --distance: 4px;
  --v-distance: 6px; /* vertical distance – only visible when breadcrumb wraps */

  /* -- parameters: colors -- */
  --c-bg: #ddd;
  --c-txt: ${p =>
    tinycolor
      .mostReadable("#ddd", ["#333"], {
        includeFallbackColors: true,
        level: "AAA",
        size: "small"
      })
      .toString()};
  --c-active-bg: ${color.primary};
  --c-active-txt: ${p =>
    tinycolor
      .mostReadable(color.primary()(p), ["#333", "#fff"], {
        includeFallbackColors: false,
        level: "AA",
        size: "small"
      })
      .toString()};
  --c-hover-bg: ${color.primary};
  --c-hover-txt: ${color.white};

  /* -- calculations -- */
  --height: calc(var(--line-px-height) + var(--v-padding) * 2);

  /* -- styling -- */
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  padding-left: 0;
  padding-right: calc(var(--edge) - var(--distance));
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  background-color: var(--c-bg);
  color: var(--c-txt);
  margin-left: var(--edge);
  margin-right: var(--distance);
  margin-bottom: var(--v-distance);

  &:hover a {
    border-color: var(--c-hover-bg);
  }

  &:not(:last-child):hover {
    background-color: var(--c-hover-bg);
    color: var(--c-hover-txt);
  }

  &:first-child {
    margin-left: 0;
    a::before {
      content: none;
    }
  }

  &:last-child {
    cursor: default;
    margin-right: calc((var(--edge) - var(--distance)) * -1);
    background-color: var(--c-active-bg);
    color: var(--c-active-txt);

    div {
      border-color: var(--c-active-bg);
    }

    ${applyVariants(Breadcrumb2.listItemLast)};
  }

  ${applyVariants(Breadcrumb2.listItem)}

  ${applyVariants(Breadcrumb2.main)};
`

const linkStyle = css`
  display: block;
  text-decoration: none;
  color: inherit;
  border-color: var(--c-bg);
  position: relative;

  ${Item}:not(:first-child) &::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    border: var(--edge) solid;
    border-color: inherit;
    border-left-color: transparent;
    border-top-width: calc(var(--height) / 2);
    border-bottom-width: calc(var(--height) / 2);
    border-right-width: 0;
    box-sizing: border-box;
    left: calc(var(--edge) * -1);
    z-index: -1;
  }

  div {
    display: flex;
    align-items: center;
    line-height: var(--line-px-height);
    padding: var(--v-padding) var(--h-padding);
    white-space: nowrap;

    ${applyVariants(Breadcrumb2.itemText)};
  }

  ${applyVariants(Breadcrumb2.itemAnchor)};
`

const Link = styled.a`
  ${linkStyle};
  ::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    border: var(--edge) solid transparent;
    border-left-color: inherit;
    border-top-width: calc(var(--height) / 2);
    border-bottom-width: calc(var(--height) / 2);
    border-right-width: 0;
    box-sizing: border-box;
    top: 0;
    right: calc(var(--edge) * -1);
  }
`

const LastItemContent = styled.div`
  ${linkStyle};
`

Breadcrumb2.themeProps = {
  main: {
    name: "BREADCRUMB2_CONTAINER",
    description:
      "The main <ol> element, which also contains custom CSS properties.",
    type: themePropTypes.style
  },
  listItem: {
    name: "BREADCRUMB2_ITEM",
    description: "One <li> list item.",
    type: themePropTypes.style
  },
  itemAnchor: {
    name: "BREADCRUMB2_LINK",
    description:
      "Item <a> tag. Will also apply to the last item, which uses a <div>.",
    type: themePropTypes.style
  },
  itemText: {
    name: "BREADCRUMB2_TEXT",
    description: "Item inner <div>.",
    type: themePropTypes.style
  }
}

Breadcrumb2.propTypes = {
  path: PropTypes.array.isRequired,
  separator: PropTypes.bool
}

Breadcrumb2.defaultProps = {
  path: [],
  separator: false
}

export default Breadcrumb2
