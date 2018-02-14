import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const RadioPill = ({ children, group, onChange, className, ...restProps }) => {
  const handleChange = event => {
    const value = event.target.value
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <RadioPillContainer className={className}>
      {children.map(child =>
        React.cloneElement(child, {
          ...child.props,
          onChange: handleChange,
          group
        })
      )}
    </RadioPillContainer>
  )
}

const RadioPillContainer = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
`

RadioPill.defaultProps = {
  onChange: null
}

RadioPill.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default RadioPill
