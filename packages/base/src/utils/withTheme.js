import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

const generateStyle = componentName => props => {
  const {theme, themeVariant} = props
  if (!theme) {
    return null
  }
  if (!theme.hasOwnProperty(componentName)) {
    return null
  }

  const component = theme[componentName]

  if (themeVariant) {
    const variant = component[themeVariant]
    if (variant.ignoreBase) {
      return css`${variant.style}`
    }
    return css`${component.base.style}${variant.style}`
  }

  return component ? component.base.style : null
}

const withTheme = WrappedComponent => {
  return class PP extends React.Component {
    render () {
      const style = generateStyle(WrappedComponent.name)
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