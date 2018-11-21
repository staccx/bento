import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Input, { InputPropTypes } from "../Input"

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

    this.handleComplete = this.handleComplete.bind(this)
  }

  handleChangeDayInput(value) {
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

  handleComplete() {
    this.props.onComplete &&
      this.props.onComplete(
        this.dayInput.current.input.current.value.toString() +
          this.monthInput.current.input.current.value.toString() +
          this.yearInput.current.input.current.value.toString()
      )
  }

  render() {
    const { id, name } = this.props
    return (
      <Container>
        <Input
          label="Dag"
          placeholder="dd"
          id={`${id}Day`}
          name={`${name}Day`}
          type={"tel"}
          ref={this.dayInput}
          onChange={e => this.handleChangeDayInput(e.target.value)}
        />
        <Input
          label="Måned"
          placeholder="mm"
          id={`${id}Month`}
          name={`${name}Month`}
          type={"tel"}
          ref={this.monthInput}
          onChange={e => this.handleChangeMonthInput(e.target.value)}
        />
        <Input
          label="År"
          placeholder="yyyy"
          id={`${id}Year`}
          name={`${name}Year`}
          type={"tel"}
          ref={this.yearInput}
          onChange={e => this.handleChangeYearInput(e.target.value)}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
`

BirthdateInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["no"]),
  onChange: PropTypes.func,
  guide: PropTypes.bool,
  id: PropTypes.string.isRequired
}

BirthdateInput.defaultProps = {}

export default BirthdateInput
