import React from "react"
import PropTypes from "prop-types"

const CheckGroup = ({ children, group, onChange }) => {
  const handleChange = event => {
    const value = event.target.value
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <>
      {children.map(child =>
        React.cloneElement(child, {
          ...child.props,
          onChange: handleChange,
          group
        })
      )}
    </>
  )
}

CheckGroup.propTypes = {
  /**
   * Children of CheckGroup would normaly be CheckBox or radioButton
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Name for the group, needed when you have multiple groups
   */
  group: PropTypes.string.isRequired,
  /**
   * When something happends to the children, you can call a function
   */
  onChange: PropTypes.func.isRequired
}

export default CheckGroup
