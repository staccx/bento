import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color } from "../../../theming"
import themeProps from "./FullScreenLoader.themeProps"
import MessageLoader from "../MessageLoader/MessageLoader"

const FullScreenLoader = ({ variant, ...props }) => {
  return (
    <FullScreenContainer variant={variant}>
      <MessageLoader variant={variant} textColor="white" {...props} />
    </FullScreenContainer>
  )
}

const FullScreenContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  ${applyVariants(themeProps.mainContainer)};
`

FullScreenLoader.propTypes = {
  messages: PropTypes.array,
  /**
   * How long between each message to display
   */
  delay: PropTypes.number,
  animation: PropTypes.number,
  variant: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  randomOrder: PropTypes.bool
}

FullScreenLoader.defaultProps = {
  messages: [],
  delay: 5000,
  animation: 500,
  randomOrder: false,
  messagePosition: "bottom"
}
FullScreenContainer.themeProps = themeProps

export default FullScreenLoader
