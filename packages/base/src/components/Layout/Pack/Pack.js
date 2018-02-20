import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Pack = ({ children, className, bottom, middle, noWrap, justify }) => (
  <PackUl className={className} bottom={bottom} middle={middle} noWrap={noWrap}>
    {children}
  </PackUl>
)

const position = (bottom, middle) => {
  if (bottom === true && middle === true)
    console.warn("Pack cannot be middle and bottom at the same time")
  else if (bottom === true) return "flex-end"
  else if (middle === true) return "center"
}

const PackUl = styled.ul`
  width: 100%;
  margin-left: 0;
  display: flex;
  justify-content: ${p => p.justify};
  align-items: ${p => position(p.bottom, p.middle)};
  flex-wrap: ${p => !p.noWrap && "wrap"};
`

Pack.defaultProps = {
  className: "",
  bottom: false,
  middle: false,
  noWrap: false,
  justify: "space-between"
}

Pack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  noWrap: PropTypes.bool,
  justify: PropTypes.string
}

export default Pack
