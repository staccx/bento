import PropTypes from "prop-types"

import React from "react"

export class Dummy extends React.Component {}

export const themeProps = {
  spacing: PropTypes.oneOf([
    "huge",
    "large",
    "mediumPlus",
    "medium",
    "small",
    "tiny",
    "micro",
    "flush"
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ])
}

Dummy.propTypes = themeProps
