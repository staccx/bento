import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import VisuallyHidden from "../../Styles/VisuallyHidden"

const Icon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    width="26"
    height="26"
    className={className}
  >
    <path d="M21.7344 19.6406l-2.0977 2.0938c-.3828.3867-1.0078.3867-1.3945 0L13 16.496l-5.2383 5.2383c-.3867.3867-1.0156.3867-1.3984 0l-2.0977-2.0938a.9878.9878 0 0 1 0-1.3984L9.504 13 4.2656 7.7617c-.3828-.3906-.3828-1.0195 0-1.3984l2.0977-2.0977c.3828-.3867 1.0117-.3867 1.3984 0L13 9.5078l5.2422-5.2422c.3867-.3867 1.0156-.3867 1.3945 0l2.0977 2.0938c.3867.3867.3867 1.0156.0039 1.4023L16.496 13l5.2383 5.2422a.9878.9878 0 0 1 0 1.3984z" />
  </svg>
)
Icon.propTypes = { className: PropTypes.string }
Icon.defaultProps = { className: "" }

class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.escFunction = this.escFunction.bind(this)
    this.state = {
      isOpen: this.props.open
    }
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({
        isOpen: false
      })
    }
  }

  handleChange(event) {
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
    const { children, className, ...otherProps } = this.props
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
          >
            <ModalContent role="document" tabIndex="0" id="modal">
              {children}
            </ModalContent>
          </ModalItem>
          <Close
            type="button"
            id="modal-close"
            aria-label="Close (Press escape to close)"
            onClick={this.handleChange}
          >
            <span>Close</span>
            <Icon />
          </Close>
          <ModalBackdrop />
        </React.Fragment>
      )
    }
    return null
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
  padding: ${p => p.theme.spacing.large} ${p => p.theme.spacing.small}
    ${p => p.theme.spacing.small} ${p => p.theme.spacing.small};
  &:focus {
    outline: none;
  }
`

const ModalContent = styled.div`
  background: white;
  grid-area: a;
  align-self: center;
  justify-self: center;
  padding: ${p => p.theme.spacing.medium};
  max-width: ${p => p.theme.wrapper.medium};
  min-width: 296px;
  width: 100%;
  overflow-y: auto;
  &:focus {
    outline: none;
  }
`

const Close = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  background: transparent;
  border-width: 0;
  fill: ${p => p.theme.color.white};
  padding: ${p => p.theme.spacing.small};
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    fill: ${p => p.theme.color.primary};
  }
  span {
    ${VisuallyHidden};
  }
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
`

Modal.defaultProps = {
  open: false,
  className: ""
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool
}

export default Modal
