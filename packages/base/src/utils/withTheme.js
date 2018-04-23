import React from "react"
import PropTypes from "prop-types"
import { css } from "styled-components"
import deepfind from "./deepfind"

const generateStyle = componentName => props => {
  if (
    !props.theme ||
    !deepfind(props.theme, componentName) ||
    !deepfind(props.theme, componentName)[props.themeVariant]
  ) {
    return null
  }

  return css`
    ${deepfind(props.theme, componentName)[props.themeVariant]};
  `
}

const withTheme = (WrappedComponent, name) => {
  return class PP extends React.Component {
    render() {
      const componentName = name || WrappedComponent.name

      const style = generateStyle(componentName)

      return <WrappedComponent {...this.props} variantStyle={style} />
    }
  }
}

withTheme.propTypes = {
  themeVariant: PropTypes.string
}

withTheme.defaultProps = {
  themeVariant: "_default"
}

export default withTheme
