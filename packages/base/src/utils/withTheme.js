import React from "react"
import PropTypes from "prop-types"
import { css } from "styled-components"
import deepfind from "./deepfind"

const generateStyle = componentName => props => {
  const { theme, themeVariant } = props
  if (!theme) {
    return null
  }

  const component = deepfind(theme, componentName)
  if (!component) {
    return null
  }

  const variant = component[themeVariant]
  if (!variant) {
    return null
  }

  return css`
    ${variant.style};
  `
}

const ignoreBaseFunction = componentName => props => {
  const component = deepfind(props.theme, componentName)
  if (
    !props.themeVariant ||
    !props.theme ||
    !component ||
    !component[props.themeVariant]
  ) {
    return null
  }

  return !!component[props.themeVariant].ignoreBase
}

const withTheme = (WrappedComponent, name) => {
  return class PP extends React.Component {
    render() {
      const componentName = name || WrappedComponent.name
      const style = generateStyle(componentName)
      const ignoreDefaultStyle = ignoreBaseFunction(componentName)

      return (
        <WrappedComponent
          {...this.props}
          variantStyle={style}
          ignoreBase={ignoreDefaultStyle}
        />
      )
    }
  }
}

withTheme.propTypes = {
  themeVariant: PropTypes.string
}

withTheme.defaultProps = {
  themeVariant: null
}

export default withTheme
