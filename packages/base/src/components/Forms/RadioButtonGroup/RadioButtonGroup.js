import React from "react"
import PropTypes from "prop-types"

const RadioButtonGroup = ({ children, group, onChange }) => {
  const handleChange = event => {
    const value = event.target.value
    if (onChange) {
      onChange(value)
    }
  }

  return children.map(child =>
    React.cloneElement(child, {
      ...child.props,
      onChange: handleChange,
      group: group
    })
  )
}

RadioButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioButtonGroup
