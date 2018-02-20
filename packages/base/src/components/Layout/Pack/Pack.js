import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Pack = ({ children, className, bottom, middle, wrap }) => (
  <PackUl className={className} bottom={bottom} middle={middle} wrap={wrap}>
    {children}
  </PackUl>
)

const position = (bottom, middle) => {
  if (bottom === true) return "flex-end"
  else if (middle === true) return "center"
}

const PackUl = styled.ul`
  width: 100%;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: ${p => position(p.bottom, p.middle)};
  flex-wrap: ${p => p.wrap && "wrap"};
`

Pack.defaultProps = {
  className: "",
  bottom: false,
  middle: false,
  wrap: false
}

Pack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  wrap: PropTypes.bool
}

export default Pack
