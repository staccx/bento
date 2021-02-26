import React from "react"
import PropTypes from "prop-types"

/**
 * This component acts as a wrapper for a group of CheckBoxes. This allows us to pick up all changes that happends
 to every CheckBox inside the CheckGroup.
 */
const CheckGroup = ({ children, group, onChange }) => {
  const [, valuesSet] = React.useState(
    React.Children.map(children, child =>
      child.props.defaultChecked ? child.props.value : null
    ).filter(item => item)
  )

  const handleChange = event => {
    const { checked, value } = event.target
    valuesSet(prevState => {
      const vals = checked
        ? [...prevState, value]
        : prevState.filter(v => v !== value)
      if (onChange) {
        onChange(vals)
      }
      return vals
    })
  }

  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...child.props,
          onChange: event => {
            handleChange(event)
            child.props.onChange && child.props.onChange(event)
          },
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
