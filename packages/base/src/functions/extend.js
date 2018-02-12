import React from 'react'
import styled, { css } from 'styled-components'

export default (Component, style, props) => {
  const preStyled = <Component {...props} />
  return styled(preStyled)`${css(style)}`
}