import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
      this.monthInput.current.input.current.focus()

      if (
        this.monthInput.current.input.current.value.toString().length > 1 &&
        this.yearInput.current.input.current.value.toString().length > 1
      ) {
        this.handleComplete()
      } else {
        this.monthInput.current.input.current.focus()
      }
    }
  }

  handleChangeMonthInput(value) {
    this.handleChange()
    if (value.toString().length > 1) {
      if (
        this.dayInput.current.input.current.value.toString().length > 1 &&
        this.yearInput.current.input.current.value.toString().length > 1
      ) {
        this.handleComplete()
      } else {
        this.yearInput.current.input.current.focus()
      }
    }
  }

  handleChangeYearInput(value) {
    this.handleChange()
    if (value.toString().length > 3) {
      if (this.dayInput.current.input.current.value.toString().length < 1) {
        this.dayInput.current.input.current.focus()
      } else if (
        this.monthInput.current.input.current.value.toString().length < 1
      ) {
        this.monthInput.current.input.current.focus()
      } else {
        this.handleComplete()
      }
    }
  }

  createDate(d, m, y) {
    return new Date(y.toString() + "-" + m.toString() + "-" + d.toString())
  }

  handleChange() {
    if (this.props.onChange) {
      this.props.onChange(
        this.dayInput.current.input.current.value.toString() +
          this.monthInput.current.input.current.value.toString() +
          this.yearInput.current.input.current.value.toString()
      )
    }
  }

  handleComplete() {
    this.props.onComplete &&
      this.props.onComplete(
        this.createDate(
          this.dayInput.current.input.current.value,
          this.monthInput.current.input.current.value,
          this.yearInput.current.input.current.value
        )
      )
  }

  render() {
    const { id, name, labels } = this.props
    return (
      <Container variant={this.props.variant}>
        <Input
          label={labels[0] && labels[0]}
          placeholder="dd"
          id={`${id}Day`}
          name={`${name}Day`}
          type={"tel"}
          ref={this.dayInput}
          onChange={e => this.handleChangeDayInput(e.target.value)}
          variant={this.props.variant}
        />
        <Input
          label={labels[1] && labels[1]}
          placeholder="mm"
          id={`${id}Month`}
          name={`${name}Month`}
          type={"tel"}
          ref={this.monthInput}
          onChange={e => this.handleChangeMonthInput(e.target.value)}
          variant={this.props.variant}
        />
        <Input
          label={labels[2] && labels[2]}
          placeholder="yyyy"
          id={`${id}Year`}
          name={`${name}Year`}
          type={"tel"}
          ref={this.yearInput}
          onChange={e => this.handleChangeYearInput(e.target.value)}
          variant={this.props.variant}
        />
      </Container>
    )
  }
}

BirthdateInput.themeProps = {
  container: {
    name: "BIRTHDATE_INPUT_CONTAINER_STYLE",
    description: "Container style",
    type: themePropTypes.style
  }
}

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
