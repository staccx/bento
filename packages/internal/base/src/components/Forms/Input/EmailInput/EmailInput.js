import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color } from "@staccx/theme"

import Input, { inputCss } from "../Input"

const tProps = {}

const getX = value => {
  const temp = document.getElementById("tempLength")
  if (!temp) {
    console.log("cant be found", document)
    return 0
  }
  temp.innerText = value

  console.log(temp)

  return temp.clientWidth + 1 // magic number, bur seems consisten
}
class EmailInput extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "",
      isValid: false
    }

    this.emailInput = React.createRef()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    const isValid = this.emailInput.current.validity.valid
    console.log(this.emailInput)
    this.setState({ value, isValid }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
    })
  }

  render() {
    const { value, isValid } = this.state
    return (
      <Wrapper isValid={value && isValid}>
        <Input
          type={"email"}
          {...this.props}
          value={value}
          onChange={this.handleChange}
          innerRef={this.emailInput}
        />
        <AtSymbol isValid={isValid} x={getX(value.split("@")[0])}>
          @
        </AtSymbol>
        <AtSymbol isValid={isValid} x={getX(value.split(".")[0])}>
          .
        </AtSymbol>
        <Hidden id={"tempLength"} />
      </Wrapper>
    )
  }
}

const Hidden = styled.div`
  position: absolute;
  visibility: hidden;
  height: auto;
  width: auto;
  white-space: nowrap;
`

const AtSymbol = styled.div`
  ${inputCss};
  border: 0;
  width: auto;
  color: ${({ isValid }) => (isValid ? color.positive : color.negative)};
  position: absolute;
  bottom: 0;
  left: ${({ x }) => x}px;
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
`

EmailInput.propTypes = {
  onChange: PropTypes.func
}

EmailInput.defaultProps = {}

EmailInput.themeProps = tProps

export default EmailInput
