import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants } from "../../../theming"
import themeProps from "./Pack.themeProps"

/**
 * The pack object simply causes any number of elements pack up horizontally to automatically fill an equal, fluid width of their parent.
 */
const Pack = ({ children, className, bottom, middle, noWrap, justify }) => (
  <PackUl
    className={className}
    bottom={bottom}
    middle={middle}
    noWrap={noWrap}
    justify={justify}
  >
    {children}
  </PackUl>
)

const position = (bottom, middle) => {
  if (bottom === true && middle === true)
    console.warn("Pack cannot be middle and bottom at the same time")
  else if (bottom === true) return "flex-end"
  else if (middle === true) return "center"
}

export const PACK = "PACK"
const PackUl = styled.ul`
  width: 100%;
  margin-left: 0;
  display: flex;
  justify-content: ${p => p.justify};
  align-items: ${p => position(p.bottom, p.middle)};
  flex-wrap: ${p => !p.noWrap && "wrap"};
  ${applyVariants(themeProps.list)};
`

Pack.defaultProps = {
  className: "",
  bottom: false,
  middle: false,
  noWrap: false,
  justify: "space-between"
}

Pack.propTypes = {
  /**
   * The component require a child and it can be an array of elements or one element.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  /**
   * The component can be assigned a class.
   */
  className: PropTypes.string,
  /**
   * The position of the Pack
   */
  bottom: PropTypes.bool,
  /**
   * The position of the Pack, a boolean
   */
  middle: PropTypes.bool,
  /**
   * The position of the Pack, a boolean
   */
  noWrap: PropTypes.bool,
  /**
   * The prop accepts a string, e.g. justify="flex-start".
   */
  justify: PropTypes.string
}
Pack.themeProps = themeProps

export default Pack
