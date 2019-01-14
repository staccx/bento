import PropTypes from "prop-types"
import React from "react"
import { commonPropTypes } from "../../constants/themeContants"

class Steps extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.resolve = this.resolve.bind(this)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.setStep = this.setStep.bind(this)
    this.navigate = this.navigate.bind(this)
    this.set = this.set.bind(this)

    this.state = {
      stepIndex: props.start,
      direction: 0,
      values: props.initialValues
    }
  }

  next() {
    this.navigate(1)
  }

  previous() {
    this.navigate(-1)
  }

  navigate(diretion) {
    const { stepIndex } = this.state
    const index = stepIndex + diretion

    this.setStep(index)
  }

  setStep(index) {
    const { stepIndex } = this.state

    const stepCount = this.props.steps.length
    const { loop } = this.props

    const direction = index > stepIndex ? 1 : -1
    if (index >= stepCount) {
      if (!loop) {
        throw new Error(
          "Trying to increment steps beyond data. Not allowed. Enable loop if intended"
        )
      } else {
        index = 0
      }
    } else if (index < 0) {
      if (!loop) {
        throw new Error(
          "Trying to increment steps beyond data. Not allowed. Enable loop if intended"
        )
      } else {
        index = stepCount - 1
      }
    }

    this.setState({
      stepIndex: index,
      direction
    })
  }

  resolve(index, steps) {
    const stepCount = steps.length
    const current = stepCount > index ? steps[index] : null
    const hasNext =
      (steps.length > index || this.props.loop) &&
      (current.validator ? current.validator() : true)
    const hasPrevious = index > 0 || this.props.loop

    const progress = (index + 1) / stepCount

    return {
      stepIndex: index,
      stepCount,
      progress,
      current,
      steps,
      hasNext,
      hasPrevious
    }
  }

  set(value) {
    this.setState(
      {
        values: {
          ...this.state.values,
          ...value
        }
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.values)
        }
      }
    )
  }

  render() {
    const { next, previous, navigate, setStep } = this
    const { values, direction } = this.state
    const state = this.resolve(this.state.stepIndex, this.props.steps)
    return this.props.children({
      ...state,
      direction,
      values,
      setState: this.set,
      next,
      previous,
      navigate,
      setStep
    })
  }
}

export default Steps

Steps.propTypes = {
  children: PropTypes.any.isRequired,
  start: PropTypes.number,
  loop: PropTypes.bool,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: commonPropTypes.children,
      validator: PropTypes.func,
      data: PropTypes.any
    })
  ),
  initialValues: PropTypes.any
}

Steps.defaultProps = {
  start: 0,
  loop: false,
  steps: [],
  initialValues: {}
}
