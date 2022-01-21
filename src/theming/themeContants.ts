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

// adding comment to test lint staged

export const variant = PropTypes.oneOf([
  PropTypes.string,
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.object
])

export const commonPropTypes = {
  spacing,
  children,
  variant
}

export const themePropTypes = {
  style: "style",
  component: "component"
}

export const VARIANT_DEFAULT = "_default"
