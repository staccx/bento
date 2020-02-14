import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Label from "../../Label/Label"
import Input from "../Input"
import { applyVariants } from "../../../../theming"
import { themePropTypes } from "../../../../constants/themeContants"

class BirthdateInput extends React.Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.dayInput = React.createRef()
    this.handleChangeDayInput = this.handleChangeDayInput.bind(this)

    this.monthInput = React.createRef()
    this.handleChangeMonthInput = this.handleChangeMonthInput.bind(this)

    this.yearInput = React.createRef()
    this.handleChangeYearInput = this.handleChangeYearInput.bind(this)

    this.createDate = this.createDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleChangeDayInput(value) {
    this.handleChange()
    if (value.toString().length > 1) {
      this.monthInput.current.focus()
      if (
        this.monthInput.current.value.toString().length > 1 &&
        this.yearInput.current.value.toString().length > 1
      ) {
        this.handleComplete()
      } else {
        this.monthInput.current.focus()
      }
    }
  }

  handleChangeMonthInput(value) {
    this.handleChange()
    if (value.toString().length > 1) {
      if (
        this.dayInput.current.value.toString().length > 1 &&
        this.yearInput.current.value.toString().length > 1
      ) {
        this.handleComplete()
      } else {
        this.yearInput.current.focus()
      }
    }
  }

  handleChangeYearInput(value) {
    this.handleChange()
    if (value.toString().length > 3) {
      if (this.dayInput.current.value.toString().length < 1) {
        this.dayInput.current.focus()
      } else if (this.monthInput.current.value.toString().length < 1) {
        this.monthInput.current.current.focus()
      } else {
        this.handleComplete()
      }
    }
  }

  createDate(d, m, y) {
    console.log(
      new Date(y.toString() + "-" + m.toString() + "-" + d.toString())
    )
    return new Date(y.toString() + "-" + m.toString() + "-" + d.toString())
  }

  handleChange() {
    if (this.props.onChange) {
      this.props.onChange(
        this.dayInput.current.value.toString() +
          this.monthInput.current.value.toString() +
          this.yearInput.current.value.toString()
      )
    }
  }

  handleComplete() {
    this.createDate(
      this.dayInput.current.value,
      this.monthInput.current.value,
      this.yearInput.current.value
    )
  }

  render() {
    const {
      id,
      name,
      labels,
      variant,
      className,
      autoFocus,
      disabled,
      onKeyDown,
      style,
      pattern,
      label,
      onChange,
      onComplete,
      ids,
      names,
      ...rest
    } = this.props
    console.log({ ...rest })
    return (
      <Outer variant={variant} className={className} style={style}>
        {label && <Label id={id}>{label}</Label>}
        <Container variant={variant}>
          <Input
            label={labels && labels[0] && labels[0]}
            placeholder="dd"
            id={ids ? (ids[0] ? ids[0] : `${id}Day`) : `${id}Day`}
            name={names ? (names[0] ? names[0] : `${name}Day`) : `${name}Day`}
            type="tel"
            ref={this.dayInput}
            onChange={e => this.handleChangeDayInput(e.target.value)}
            variant={variant}
            autoFocus={autoFocus}
            disabled={disabled}
            onKeyDown={onKeyDown}
            pattern={pattern}
            aria-labelledby={label && id}
          />
          <Input
            label={labels && labels[1] && labels[1]}
            placeholder="mm"
            id={ids ? (ids[1] ? ids[1] : `${id}Month`) : `${id}Month`}
            name={`${name}Month`}
            type="tel"
            ref={this.monthInput}
            onChange={e => this.handleChangeMonthInput(e.target.value)}
            variant={variant}
            disabled={disabled}
            onKeyDown={onKeyDown}
            pattern={pattern}
            aria-labelledby={label && id}
          />
          <Input
            label={labels && labels[2] && labels[2]}
            placeholder="yyyy"
            id={ids ? (ids[2] ? ids[2] : `${id}Year`) : `${id}Year`}
            name={`${name}Year`}
            type="tel"
            ref={this.yearInput}
            onChange={e => this.handleChangeYearInput(e.target.value)}
            variant={variant}
            disabled={disabled}
            onKeyDown={onKeyDown}
            pattern={pattern}
            aria-labelledby={label && id}
          />
        </Container>
      </Outer>
    )
  }
}

BirthdateInput.themeProps = {
  outer: {
    name: "BIRTHDATE_INPUT_OUTER_STYLE",
    description: "Outer style",
    type: themePropTypes.style
  },
  container: {
    name: "BIRTHDATE_INPUT_CONTAINER_STYLE",
    description: "Container style",
    type: themePropTypes.style
  }
}

const Outer = styled.div`
  ${applyVariants(BirthdateInput.themeProps.outer)};
`

const Container = styled.div`
  display: flex;
  ${applyVariants(BirthdateInput.themeProps.container)};
`

BirthdateInput.propTypes = {
  variant: PropTypes.string,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  ids: PropTypes.array.isRequired,
  labels: PropTypes.array
}

BirthdateInput.defaultProps = {}

export default BirthdateInput
