import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Upload from "../../../Icons/Upload/Upload"
import {
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  font,
  fontFamily,
  fontWeight,
  hideVisually,
  spacing,
  targetSize
} from "../../../../theming"
import ThemeComponent from "../../../Theme/ThemeComponent/ThemeComponent"
import themeProps from "./FileInput.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const tinycolor = require("tinycolor2")

const FileInput = ({
  onChange,
  showFileName,
  singleFileLabel,
  multipleFilesLabel,
  children,
  id,
  disabled,
  className,
  variant,
  accept,
  multiple,
  ...restProps
}) => {
  const fileinput = React.useRef()
  const [uploadedFile, uploadedFileSet] = React.useState(null)

  const handleChange = e => {
    if (fileinput.current.files.length > 1) {
      uploadedFileSet(`${fileinput.current.files.length} ${multipleFilesLabel}`)
    } else if (fileinput.current.files.length) {
      uploadedFileSet(
        `${
          showFileName
            ? fileinput.current.files[0].name.split("\\").pop()
            : singleFileLabel
        }`
      )
    }
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <FileWrapper variant={variant} className={className} title={uploadedFile}>
      <Input
        type="file"
        ref={fileinput} // To get the number of uploaded files from the input in case of multiple files
        accept={accept}
        id={id}
        disabled={disabled}
        onChange={handleChange}
        multiple={multiple}
        variant={variant}
        {...restProps}
      />
      <Label htmlFor={id} variant={variant} disabled={disabled}>
        <Icon variant={variant} />
        <span>{uploadedFile || children}</span>
      </Label>
    </FileWrapper>
  )
}

const FileWrapper = styled.div`
  ${applyVariants(themeProps.wrapper)};
`

const Input = styled.input`
  ${hideVisually};
  ${applyVariants(themeProps.input)};
`

const Label = styled.label`
  display: flex;
  cursor: pointer;
  background-color: ${props => (props.disabled ? color`gray` : color`primary`)};
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
  padding: ${spacing("tiny")} ${spacing("medium")};
  min-height: ${targetSize.normal};
  text-decoration: none;
  text-align: center;
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
      tinycolor(color(p.disabled ? "gray" : "primary")(p))
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(tinycolor(color("primary")(p)).darken(5), ["#fff"], {
          includeFallbackColors: true,
          level: "AA",
          size: "large"
        })
        .toString()};
  }

  ${applyVariants(themeProps.label)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent}
    fallback={Upload}
    {...props}
  />
)

export const Icon = styled(IconComponent)`
  display: block;
  height: 12px;
  width: 12px;
  margin-right: 3px;
  ${applyVariants(themeProps.icon)};
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
FileInput.themeProps = themeProps
FileInput.createVariants = componentCreateFactory(FileInput)

export default FileInput
