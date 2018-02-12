import React from 'react'
import styled, { css, } from 'styled-components'

export default (Component, style) => {
  return styled(Component)`${css(style)}`
}