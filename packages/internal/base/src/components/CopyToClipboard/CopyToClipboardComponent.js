import PropTypes from "prop-types"
import styled from "styled-components"
import CopyToClipboard from "./CopyToClipboard"
import React from "react"
import Upload from "../Icons/Upload"
import Check from "../Icons/Check"
import FileInput from "../Forms/Input/FileInput/FileInput"
import { themify, ThemeComponent, themeProps } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

class CopyToClipboardComponent extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      copied: false
    }
  }

  handleClick(copy) {
    copy(this.props.copyText)
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1000)
    })
  }

  render() {
    return (
      <CopyToClipboard children={this.props.children}>
        {({ copy }) => (
          <ClipboardWrapper
            onClick={() => {
              this.handleClick(copy)
            }}
          >
            {this.props.children}
            {this.state.copied ? <Copied /> : <Copy />}
          </ClipboardWrapper>
        )}
      </CopyToClipboard>
    )
  }
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

const ClipboardWrapper = styled.div``

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
  ${themify(FileInput.themeProps.icon)};
`

export const Copied = styled(CopiedComponent)`
  ${themify(FileInput.themeProps.icon)};
`

CopyToClipboardComponent.propTypes = {
  children: themeProps.children.isRequired,
  copyText: PropTypes.string.isRequired
}

export default CopyToClipboardComponent
