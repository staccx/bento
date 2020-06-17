import React from "react"
import themeProps from "./FocusTrap.themeProps"
import styled from "styled-components"
import { applyVariants } from "../../theming"
import { useFocusTrap } from "../../hooks/useFocusTrap/useFocusTrap"

const FocusTrap = React.forwardRef(
  ({ children, options = {}, activateOnReady = true }, ref) => {
    const refToTrapAround = React.useRef(null)
    useFocusTrap(
      refToTrapAround,
      {
        initialFocusElement: ref,
        activateOnReady
      },
      options
    )

    return (
      <FocusTrapContainer ref={refToTrapAround}>{children}</FocusTrapContainer>
    )
  }
)

const FocusTrapContainer = styled.div`
  ${applyVariants(themeProps.container)};
`

FocusTrap.themeProps = themeProps

export default FocusTrap
