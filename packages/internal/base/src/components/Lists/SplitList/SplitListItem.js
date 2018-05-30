import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  spacing,
  fontFamily,
  font,
  color,
  themify,
  themeProps
} from "@staccx/theme"

const SplitListItem = ({ children, className, ...restProps }) => {
  if (React.Children.count(children) > 2) {
    console.warn(
      "SplitListItem exceeded max children: Can only contain 2 children. Others will be omitted."
    )
  }
  return (
    <ListItem className={className} {...restProps}>
      {React.Children.map(children, (child, index) => {
        return index <= 1 ? <span>{child}</span> : null
      })}
    </ListItem>
  )
}

export const SPLIT_LIST = "split_list"
const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid ${color.line};
  padding: ${spacing.tiny()} ${spacing.medium()};
  font-size: ${font.base};
  font-family: ${fontFamily.body()};

  &:last-child {
    border-bottom: none;
  }
  ${themify(SPLIT_LIST)};
`

SplitListItem.defaultProps = {
  className: ""
}

SplitListItem.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default SplitListItem
