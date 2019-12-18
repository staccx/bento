import PropTypes from "prop-types"
import styled from "styled-components"
import CopyToClipboard from "../../hoc/Clipboard/CopyToClipboard"
import React, { useState } from "react"
import Upload from "../Icons/Upload"
import Check from "../Icons/Check"
import ThemeComponent from "../Theme/ThemeComponent"
import { applyVariants } from "../../theming"
import { themePropTypes, commonPropTypes } from "../../constants/themeContants"
const CopyToClipboardComponent = ({
  children,
  copyText,
  variant,
  ...restProps
}) => {
  const [copied, setCopied] = useState(false)
  if (!copyText) {
    throw new Error("Copy text is required")
  }
  const handleClick = copy => {
    copy(copyText)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  return (
    <CopyToClipboard children={children} variant={variant}>
      {({ copy }) => (
        <ClipboardWrapper
          variant={variant}
          onClick={() => {
            handleClick(copy)
          }}
          {...restProps}
        >
          {children}
          {copied ? <Copied variant={variant} /> : <Copy variant={variant} />}
        </ClipboardWrapper>
      )}
    </CopyToClipboard>
  )
}
CopyToClipboardComponent.themeProps = {
  wrapper: {
    name: "CopyToClipboardComponent_Wrapper",
    description: "CopyToClipboardComponent wrapper style",
    type: themePropTypes.style
  },
  icon: {
    name: "CopyToClipboardComponent_Icon_style",
    description: "Icon style",
    type: themePropTypes.style
  },
  copyComponent: {
    name: "CopyToClipboardComponent_CopyComponent",
    description: "Copy component",
    type: themePropTypes.component
  },
  copiedComponent: {
    name: "CopyToClipboardComponent_CopiedComponent",
    description: "Copied component",
    type: themePropTypes.component
  }
}
const ClipboardWrapper = styled.button`
  &:hover {
    outline: none;
  }
  ${applyVariants(CopyToClipboardComponent.themeProps.wrapper)};
`
const CopiedComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={CopyToClipboardComponent.themeProps.copiedComponent}
    fallback={Check}
    {...props}
  />
)
const CopyComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={CopyToClipboardComponent.themeProps.copyComponent}
    fallback={Upload}
    {...props}
  />
)
export const Copy = styled(CopyComponent)`
  ${applyVariants(CopyToClipboardComponent.themeProps.icon)};
`
export const Copied = styled(CopiedComponent)`
  ${applyVariants(CopyToClipboardComponent.themeProps.icon)};
`
CopyToClipboardComponent.propTypes = {
  children: commonPropTypes.children.isRequired,
  copyText: PropTypes.string.isRequired
}
export default CopyToClipboardComponent
