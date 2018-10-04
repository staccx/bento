import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../Styles/hideVisually"
import {
  spacing,
  color,
  wrapper,
  themify,
  ThemeComponent,
  borderRadius
} from "@staccx/theme"
import IconClose from "../Icons/Close"
import { FadeIn } from "@staccx/animations"
import themePropTypes from "../../constants/themePropTypes"

class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.escFunction = this.escFunction.bind(this)
    this.state = {
      isOpen: this.props.isOpen
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen })
    }
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      if (this.props.onClose) {
        this.props.onClose(event)
      }
      this.setState({
        isOpen: false
      })
    }
  }

  handleChange(event) {
    if (this.props.onClose) {
      this.props.onClose(event)
    }
    // TODO: Make controllable/uncontrollable toggle.
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  fixOverflow(event) {
    if (this.state.isOpen) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false)
  }

  render() {
    const { children, className, variant, ...otherProps } = this.props
    const { isOpen } = this.state
    this.fixOverflow()
    if (isOpen) {
      return (
        <React.Fragment>
          <ModalItem
            className={className}
            {...otherProps}
            role="dialog"
            tabIndex="0"
            open="open"
            aria-labelledby="modal"
            variant={variant}
          >
            <ModalContent
              role="document"
              tabIndex="0"
              id="modal"
              variant={variant}
            >
              <Close
                type="button"
                id="modal-close"
                aria-label="Close (Press escape to close)"
                onClick={this.handleChange}
              >
                <span>Close</span>
                <Icon />
              </Close>
              {children}
            </ModalContent>
          </ModalItem>
          <ModalBackdrop onClick={this.handleChange} variant={variant} />
        </React.Fragment>
      )
    }
    return null
  }
}

Modal.themeProps = {
  dialog: {
    name: "modal_item",
    description: "",
    type: themePropTypes.style
  },
  content: {
    name: "modal_content",
    description: "",
    type: themePropTypes.style
  },
  close: {
    name: "modal_close",
    description: "",
    type: themePropTypes.style
  },
  backdrop: {
    name: "modal_backdrop",
    description: "",
    type: themePropTypes.style
  },
  closeIcon: {
    name: "COMPONENT_MODAL_CLOSE_ICON",
    description: "",
    type: themePropTypes.component
  }
}
const ModalItem = styled.dialog`
  border-width: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: grid;
  grid-template-columns: 24px 1fr 1fr 24px;
  grid-gap: 12px;
  grid-template-areas:
    ". . . ."
    ". a a ."
    ". a a ."
    ". . . .";
  background: transparent;
  padding: ${spacing.large()} ${spacing.small()} ${spacing.small()}
    ${spacing.small()};
  &:focus {
    outline: none;
  }
  ${themify(Modal.themeProps.dialog)};
`

const ModalContent = styled.div`
  background: white;
  border-radius: ${borderRadius};
  grid-area: a;
  align-self: center;
  justify-self: center;
  padding: ${spacing.large} ${spacing.medium} ${spacing.medium}
    ${spacing.medium};
  max-width: ${wrapper.medium};
  min-width: 296px;
  width: 100%;
  overflow-y: auto;
  position: relative;
  &:focus {
    outline: none;
  }
  ${themify(Modal.themeProps.content)};
`

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
  background: transparent;
  border-width: 0;
  fill: ${color.primary};
  padding: ${spacing.small()};
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    fill: ${color.primary};
  }
  span {
    ${hideVisually};
  }
  ${themify(Modal.themeProps.close)};
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  animation: 0.2s ${FadeIn} ease-out forwards 1;
  ${themify(Modal.themeProps.backdrop)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={Modal.themeProps.closeIcon}
    fallback={IconClose}
    {...props}
  />
)

const Icon = styled(IconComponent)``

Modal.defaultProps = {
  isOpen: false,
  className: ""
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal
