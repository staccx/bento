import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid ${p => p.theme.color.line};
  padding: ${p => p.theme.spacing.tiny} ${p => p.theme.spacing.medium};
  font-size: ${p => p.theme.font.size.base};
  font-family: ${p => p.theme.font.body};

  &:last-child {
    border-bottom: none;
  }
`

const SplitListItem = ({ children, className }) => {
  if (React.Children.count(children) > 2) {
    console.warn(
      "SplitListItem exceeded max children: Can only contain 2 children. Others will be omitted."
    )
  }
  return (
    <ListItem className={className}>
      {React.Children.map(children, (child, index) => {
        return index <= 1 ? <span>{child}</span> : null
      })}
    </ListItem>
  )
}

SplitListItem.defaultProps = {
  className: ""
}

SplitListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  className: PropTypes.string
}

export default SplitListItem
