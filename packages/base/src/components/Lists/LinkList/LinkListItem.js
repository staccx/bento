import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Caret = ({ className }) => (
  <svg className={className} width="13" height="19" viewBox="0 0 13 19">
    <path d="M2.8 0L0 2.8l6.6 6.6L0 16l2.8 2.8 9.4-9.4L2.8 0z" />
  </svg>
)

Caret.propTypes = { className: PropTypes.string }
Caret.defaultProps = { className: "" }

const LinkListItem = ({ className, children, onClick, to }) => (
  <ListItem className={className}>
    <Button onClick={onClick && onClick} to={to}>
      {children} <Cursor />
    </Button>
  </ListItem>
)

LinkListItem.defaultProps = {
  className: "",
  defaultProps: null
}

LinkListItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

const Cursor = styled(Caret)`
  fill: ${p => p.theme.color.line};
  margin-left: ${p => p.theme.spacing.small};
`

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${p => p.theme.color.line};
  position: relative;
  &:last-child {
    border-bottom: none;
  }
`

const ButtonStyle = css`
  text-decoration: none;
  color: black;
  font-size: ${p => p.theme.font.size.base};
  font-family: ${p => p.theme.font.body};
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  display: block;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
`

const Button = styled.a`
  ${ButtonStyle};
  &:hover,
  &:focus {
    ${Cursor} {
      fill: ${p => p.theme.color.primary};
    }
  }
`

export default LinkListItem
