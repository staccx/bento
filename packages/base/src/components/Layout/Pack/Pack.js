import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Pack = ({ children, className, bottom, middle }) => (
  <PackUl className={className} bottom={bottom} middle={middle}>
    {children}
  </PackUl>
)

const position = (bottom, middle) => {
  if (bottom === true) return "bottom"
  else if (middle === true) return "middle"
}

const PackUl = styled.ul`
  width: 100%;
  margin-left: 0;
  display: table;
  table-layout: fixed;
  > * {
    vertical-align: ${p => position(p.bottom, p.middle)};
  }
`

Pack.defaultProps = {
  className: "",
  bottom: false,
  middle: false
}

Pack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  bottom: PropTypes.bool,
  middle: PropTypes.bool
}

export default Pack
