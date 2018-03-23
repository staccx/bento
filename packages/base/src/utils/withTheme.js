import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import deepfind from './deepfind'

const BASE_NAME = "base"
const generateStyle = componentName => props => {
  const {theme, themeVariant = BASE_NAME} = props
  if (!theme) {
    return null
  }
  const component = deepfind(theme, componentName)
  if (!component) {
    return null
  }
  const variant = component[themeVariant]
  if(!variant) {
    console.log("no variant", componentName, themeVariant)
  }
  if (variant.ignoreBase || themeVariant === BASE_NAME) {
    return css`
        ${variant.style};
      `
  }

  return css`${component.base.style}${variant.style}`
}

const withTheme = (WrappedComponent, name) => {
  return class PP extends React.Component {
    render () {
      const componentName = name || WrappedComponent.name
      const style = generateStyle(componentName)
      return <WrappedComponent {...this.props} themeStyle={style}/>
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
