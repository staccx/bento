import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Upload from "../../../Icons/Upload/Upload"
import {
  color,
  font,
  spacing,
  targetSize,
  fontFamily,
  borderRadius,
  fontWeight,
  applyVariants,
  commonPropTypes,
  themePropTypes,
  hideVisually
} from "../../../../theming"
import ThemeComponent from "../../../Theme/ThemeComponent"
const tinycolor = require("tinycolor2")

class FileInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.fileInput = React.createRef() // To get the number of uploaded files from the input in case of multiple files
    this.state = {
      uploadedFile: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target

    if (this.fileInput.current.files.length > 1) {
      this.setState({
        uploadedFile:
          this.fileInput.current.files.length +
          " " +
          this.props.multipleFilesLabel
      })
    } else if (value.length) {
      this.setState({
        uploadedFile: this.props.showFileName
          ? value.split("\\").pop()
          : "1 " + this.props.singleFileLabel
      })
    }
    this.props.onChange && this.props.onChange(e)
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
      <FileWrapper
        variant={variant}
        className={className}
        title={this.state.uploadedFile}
      >
        <Input
          type="file"
          ref={this.fileInput} // To get the number of uploaded files from the input in case of multiple files
          accept={accept}
          id={id}
          disabled={disabled}
          onChange={this.handleChange}
          multiple={multiple}
          variant={variant}
          {...restProps}
        />
        <Label htmlFor={id} variant={variant}>
          <Icon variant={variant} />
          <span>
            {this.state.uploadedFile ? this.state.uploadedFile : children}
          </span>
        </Label>
      </FileWrapper>
    )
  }
}

FileInput.themeProps = {
  wrapper: {
    name: "FileInput_Wrapper",
    description: "FileInput wrapper style",
    type: themePropTypes.style
  },
  input: {
    name: "FileInput_Input",
    description: "Input style – default is hidden! Style the label instead.",
    type: themePropTypes.style
  },
  label: {
    name: "FileInput_Label",
    description: "Label style",
    type: themePropTypes.style
  },
  icon: {
    name: "FileInput_Icon_Style",
    description: "Icon style",
    type: themePropTypes.style
  },
  iconComponent: {
    name: "FileInput_Icon_Component",
    description: "Icon component",
    type: themePropTypes.component
  }
}

const FileWrapper = styled.div`
  ${applyVariants(FileInput.themeProps.wrapper)};
`

const Input = styled.input`
  ${hideVisually};
  ${applyVariants(FileInput.themeProps.input)};
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

  > span {
    display: flex;
    align-items: center;
  }

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

  ${applyVariants(FileInput.themeProps.label)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={FileInput.themeProps.iconComponent}
    fallback={Upload}
    {...props}
  />
)

export const Icon = styled(IconComponent)`
  display: block;
  height: 12px;
  width: 12px;
  margin-right: 3px;
  ${applyVariants(FileInput.themeProps.icon)};
`

FileInput.propTypes = {
  accept: PropTypes.string,
  children: commonPropTypes.children.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  ignoreBase: PropTypes.func,
  variant: PropTypes.string,
  multipleFilesLabel: PropTypes.string,
  singleFileLabel: PropTypes.string,
  showFileName: PropTypes.bool
}

FileInput.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  className: "",
  multipleFilesLabel: "files",
  singleFileLabel: "file",
  showFileName: true
}

export default FileInput
