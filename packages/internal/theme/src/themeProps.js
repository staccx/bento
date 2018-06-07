import PropTypes from "prop-types"

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
