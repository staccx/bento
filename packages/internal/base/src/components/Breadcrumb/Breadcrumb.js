import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
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

const tProps = {
  container: {
    name: "BREADCRUMB_CONTAINER",
    description: "The container for the crumbs",
    type: themePropTypes.style
  },
  smule: {
    name: "BREADCRUMB_CRUMB",
    description: "One single crumb",
    type: themePropTypes.style
  },
  smuleButton: {
    name: "CRUMB_BUTTON",
    description: "The clickable elements in the breadcrumb",
    type: themePropTypes.style
  },
  smuleHeading: {
    name: "CRUMB_HEADING",
    description: "The current non-clickable location in the breadcrumb",
    type: themePropTypes.style
  }
}

const Breadcrumb = ({ path }) => (
  <LunchBox>
    {path.map(pathItem =>
      pathItem.to ? (
        /* TODO: Check if this is the last item,
        and generate console error, if possible */
        <Smule key={pathItem.name}>
          <SmuleButton to={pathItem.to}>{pathItem.name}</SmuleButton>
        </Smule>
      ) : (
        <SmuleCurrent key={pathItem.name}>
          <SmuleHeading key={pathItem.name}>{pathItem.name}</SmuleHeading>
        </SmuleCurrent>
      )
    )}
  </LunchBox>
)

const LunchBox = styled.ol`
  display: flex;
  flex-wrap: wrap;
  font-size: ${font.base};
  font-family: ${fontFamily.body};
  font-weight: ${fontWeight.normal};
  /* width: fit-content; not supported by Edge */

  --max-width: none;
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
  --line-height: 18px;
  --padding-ver: ${spacing.small};
  --padding-hor: ${spacing.small};
  --padding-left: calc(var(--padding-hor) + var(--sep-width) * 0.25);
  ---height: calc(var(--line-height) + var(--padding-ver) * 2);
  ---push: calc(var(--sep-width) + var(--distance));

  ${applyVariants(tProps.container.name)};
`

const Smule = styled.li`
  background: var(--bg-color);
  margin-left: var(---push);
  white-space: nowrap;
  position: relative;

  > a {
    line-height: var(--line-height);
    color: var(--color);
    padding: var(--padding-ver) var(--padding-hor);
    padding-left: var(--padding-left);
    text-align: center;
  }

  :first-child {
    margin-left: 0;
    > a {
      padding-left: calc(var(--padding-hor) + var(--sep-width) * 0.5);
    }
  }

  :last-child > a {
    padding-right: calc(var(--padding-hor) + var(--sep-width) * 0.5);
  }

  :not(:first-child) > a::before {
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

  &:last-child:not(:only-child)::before {
    border-color: var(--active-bg-color);
    border-left-color: transparent;
  }

  :not(:last-child) > a::after {
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

  > a:hover,
  > a:focus {
    outline: none;
    background-color: var(--hover-bg-color);
    color: var(--hover-color);
    text-decoration: none;
    &::before {
      border-color: var(--hover-bg-color);
      border-left-color: transparent;
    }
  }

  > a:hover::after,
  > a:focus::after {
    border-left-color: var(--hover-bg-color);
  }

  ${applyVariants(tProps.smule.name)};
`

const SmuleCurrent = styled(Smule)`
  background-color: var(--active-bg-color);
  line-height: var(--line-height);
  color: var(--color);
  padding: var(--padding-ver) var(--padding-hor);
  padding-left: var(--padding-left);
  cursor: default;
  color: var(--active-color);
  :not(:first-child)::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: calc(var(--sep-width) * -1);
    border: var(--sep-width) solid var(--active-bg-color);
    border-left-color: transparent;
    border-width: calc(var(---height) / 2) var(--sep-width);
    z-index: -1;
  }
  :not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: calc(var(--sep-width) * -2);
    border: var(--sep-width) solid transparent;
    border-left-color: var(--active-bg-color);
    border-width: calc(var(---height) / 2) var(--sep-width);
  }
  :last-child {
    padding-right: calc(var(--padding-hor) + var(--sep-width) * 0.5);
  }
`

const SmuleButton = styled(Link)`
  display: block;
  color: currentColor;
  text-decoration: none;
  max-width: var(--max-width);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${color.primary};
  }

  ${applyVariants(tProps.smuleButton.name)};
`

const SmuleHeading = styled.h1`
  line-height: inherit;
  font-size: inherit;
  font-weight: ${fontWeight.bold};
  max-width: var(--max-width);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${applyVariants(tProps.smuleHeading.name)};
`

Breadcrumb.propTypes = {
  path: PropTypes.array
}

Breadcrumb.themeProps = tProps

export default Breadcrumb
