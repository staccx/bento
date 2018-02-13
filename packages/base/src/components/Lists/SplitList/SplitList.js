import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`

const SplitList = ({ children, className }) => (
  <List className={className}>{children}</List>
)

SplitList.defaultProps = {
  className: ""
}

SplitList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
}

export default SplitList
