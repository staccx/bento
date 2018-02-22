import React from 'react'
import { number } from 'prop-types'
import styled from 'styled-components'
import Digit from './Digit'
import VisuallyHidden from '../../../Styles/VisuallyHidden'

class Odometer extends React.PureComponent {
  constructor (...props) {
    super(...props)

    this.state = {
      isAnimating: false
    }

    this.timeout = null

    this.animate = this.animate.bind(this)
  }

  componentWillMount () {
    this.animate()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.number !== nextProps.number) {
      this.animate()
    }
  }

  animate () {
    this.setState({isAnimating: true})
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({isAnimating: false})
    }, this.props.speed + 10)
  }

  render () {
    const {number, speed, size, separatorSteps, ...restProps} = this.props

    const {isAnimating} = this.state

    // TODO: Remove this once we have settled on formatting -> Intl.NumberFormat vs accounting vs masking lib
    const formatNumber = (num, thousandSeparator = ' ') => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
    }

    const chars = parseInt(number, 10)
      .toString()
      .replace('-', '')
      .split('')
    const digitLength = chars.length
    const numSeparators = digitLength / separatorSteps
    const separatorIndices = []
    for (let i = 0; i < numSeparators; i++) {
      // TODO: There HAS to be a smarter way of doing this. Brain is not working atm
      separatorIndices.push(digitLength - separatorSteps * i)
    }

    const separate = (index, len) =>
      separatorIndices.indexOf(index) > -1 && index < len
    return (
      <OdometerWrapper size={size} {...restProps}>
        <OdometerStatic isAnimating={isAnimating}>{formatNumber(number)}</OdometerStatic>
        <OdometerAnimating isAnimating={isAnimating}>
          {chars.map((digit, i) => {
            // NOTE: Do not change the key here. it needs to use index
            return (
              <OdometerContainer key={`digit-${i}`}>
                {separate(i, chars.length) && <Separator isAnimating>&nbsp;</Separator>}
                <Digit isAnimating size={size} digit={digit} speed={speed}/>
              </OdometerContainer>
            )
          })}
        </OdometerAnimating>
      </OdometerWrapper>
    )
  }
}

const OdometerAnimating = styled.div`
  ${p => !p.isAnimating ? VisuallyHidden : ''};
`
const OdometerStatic = styled.div`
   ${p => p.isAnimating ? VisuallyHidden : ''};
  letter-spacing: 4px;
`

const OdometerContainer = styled.div`
  display: inline-block;
  position: relative;
`

const OdometerWrapper = styled.div`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
`

const Separator = styled.div`
  display: block;
  float: left;
`

// TODO: Add support for strings?
Odometer.propTypes = {
  number: number.isRequired,
  separatorSteps: number,
  speed: number,
  size: number.isRequired
}

Odometer.defaultProps = {
  separatorSteps: 3,
  speed: 500
}

export default Odometer
