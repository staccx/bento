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
    <React.Fragment>
      {children.map(child =>
        React.cloneElement(child, {
          ...child.props,
          onChange: handleChange,
          group
        })
      )}
    </React.Fragment>
  )
}

CheckGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckGroup
