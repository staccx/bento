import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import IconClose from "../Icons/Close/Close"
import { FadeIn } from "../../animations"
import {
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  hideVisually,
  spacing,
  wrapper
} from "../../theming"
import ThemeComponent from "../Theme/ThemeComponent/ThemeComponent"
import themeProps from "./Modal.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"
import { useFocusTrap } from "../../hooks/useFocusTrap/useFocusTrap"

/**
 * Modal is a dialog box/popup window that is displayed on top of the current page
 */
const Modal = ({ children, className, isOpen, onClose, variant, ...props }) => {
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef(null)
  const { ready, activate } = useFocusTrap(
    containerRef,
    {
      activateOnReady: false
    },
    {
      fallbackFocus: "#modal"
    }
  )

  const handleClose = event => {
    if (onClose) {
      onClose(event)
    }

    setOpen(false)
  }

  const fixOverflow = () => {
    document.documentElement.style.overflow = open ? "hidden" : ""
  }

  React.useEffect(() => {
    const escFunction = event => {
      if (event.keyCode === 27) {
        if (onClose) {
          onClose(event)
        }
        setOpen(false)
      }
    }
    document.addEventListener("keydown", escFunction)
    return () => {
      document.removeEventListener("keydown", escFunction)
      document.documentElement.style.overflow = ""
    }
  }, [])

  React.useEffect(() => {
    fixOverflow()
    if (open && ready) {
      activate()
    }
  }, [open, ready])
  React.useEffect(() => {
    if (isOpen !== open) {
      setOpen(isOpen)
    }
  }, [isOpen])

  return (
    <div ref={containerRef}>
      {open && (
        <>
          <ModalItem
            className={className}
            {...props}
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
                onClick={handleClose}
                variant={variant}
              >
                <span>Close</span>
                <Icon />
              </Close>
              {children}
            </ModalContent>
          </ModalItem>
          <ModalBackdrop onClick={handleClose} variant={variant} />
        </>
      )}
    </div>
  )
}

const ModalItem = styled.dialog`
  border-width: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: fixed;
  pointer-events: none;
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
  padding: ${spacing.large} ${spacing.small} ${spacing.small} ${spacing.small};
  &:focus {
    outline: none;
  }
  ${applyVariants(themeProps.dialog)};
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
  pointer-events: all;
  &:focus {
    outline: none;
  }
  ${applyVariants(themeProps.content)};
`

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
  background: transparent;
  border-width: 0;
  color: ${color.primary};
  padding: ${spacing.small};
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    color: ${color.secondary};
  }
  span {
    ${hideVisually};
  }
  ${applyVariants(themeProps.close)};
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
  ${applyVariants(themeProps.backdrop)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.closeIcon}
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
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  /**
   * When isOpen is true, the modal is displayed
   */
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
Modal.themeProps = themeProps
Modal.createVariants = componentCreateFactory(Modal)

export default Modal
