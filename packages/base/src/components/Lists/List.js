import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ListUl = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`

const List = ({ children, className }) => (
  <ListUl className={className}>{children}</ListUl>
)

List.defaultProps = {
  className: ""
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
}

export default List
