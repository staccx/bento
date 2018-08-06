import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import {
  themify,
  color,
  font,
  spacing,
  targetSize,
  fontFamily,
  borderRadius,
  fontWeight,
  themeProps
} from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"
const tinycolor = require("tinycolor2")

class FileInput extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      uploadedFile: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target

    if (value.length) {
      console.log(value)
      const fileName = value.split("\\").pop()
      console.log(fileName)
      this.setState({ uploadedFile: fileName })
    }

    this.props.onChange(e)
  }

  render() {
    const {
      children,
      id,
      disabled,
      className,
      variant,
      accept,
      multiple,
      onChange,
      ...restProps
    } = this.props

    return (
      <FileWrapper variant={variant}>
        <Input
          type="file"
          accept={accept}
          className={className}
          id={id}
          disabled={disabled}
          onChange={this.handleChange}
          {...restProps}
        />
        <Label htmlFor={id} variant={variant}>
          {this.state.uploadedFile ? this.state.uploadedFile : children}
        </Label>
      </FileWrapper>
    )
  }
}

FileInput.themeProps = {
  wrapper: {
    name: "fileinput_wrapper",
    description: "FileInput wrapper style",
    type: themePropTypes.style
  },
  input: {
    name: "fileinput_input",
    description: "Input style – default is hidden! Style the label instead.",
    type: themePropTypes.style
  },
  label: {
    name: "fileinput_label",
    description: "Label style",
    type: themePropTypes.style
  }
}

const FileWrapper = styled.div`
  ${themify(FileInput.themeProps.wrapper)};
`

const Input = styled.input`
  ${hideVisually};
  ${themify(FileInput.themeProps.input)};
`

const Label = styled.label`
  cursor: pointer;
  background-color: ${color.primary};
  color: ${p =>
    tinycolor
      .mostReadable(color.primary()(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
  border-width: 0;
  border-radius: ${borderRadius};
  padding: ${spacing.tiny} ${spacing.medium};
  cursor: pointer;
  min-height: ${targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${font.base};
  font-family: ${fontFamily.body};
  line-height: 32px;
  font-weight: ${fontWeight.bold};
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${p =>
      tinycolor(color.primary()(p))
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(tinycolor(color.primary()(p)).darken(5), ["#fff"], {
          includeFallbackColors: true,
          level: "AA",
          size: "large"
        })
        .toString()};
  }

  ${themify(FileInput.themeProps.label)};
`

FileInput.propTypes = {
  accept: PropTypes.string,
  children: themeProps.children.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  ignoreBase: PropTypes.func,
  variant: PropTypes.string
}

FileInput.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  className: ""
}

export default FileInput
