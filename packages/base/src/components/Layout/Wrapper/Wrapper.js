import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { spacing, wrapper } from '@staccx/theme'

const Wrapper = ({children, className, size, breakout, ...otherProps}) => (
  <Wrap breakout={breakout} className={className} size={size} {...otherProps}>
    {children}
  </Wrap>
)

const Wrap = styled.div`
  width: 100%;
  max-width: ${p => wrapper(p.size)};
  margin: auto;
  padding-left: ${spacing.medium()};
  padding-right: ${spacing.medium()};

  ${p =>
  p.breakout &&
  css`
      @media (max-width: ${wrapper.breakout}) {
        padding-left: 0;
        padding-right: 0;
      }
    `};
`

Wrapper.defaultProps = {
  className: '',
  size: 'large',
  breakout: false
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  breakout: PropTypes.bool
}

export default Wrapper
