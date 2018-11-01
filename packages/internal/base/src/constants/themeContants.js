import PropTypes from "prop-types"

const spacing = PropTypes.oneOf([
  "huge",
  "large",
  "mediumPlus",
  "medium",
  "small",
  "tiny",
  "micro",
  "flush"
])

const children = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.func
])

export const commonPropTypes = {
  spacing,
  children
}

export const themePropTypes = {
  style: "style",
  component: "component"
}

export const VARIANT_DEFAULT = "_default"
