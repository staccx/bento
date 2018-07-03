import deepfind from "./deepfind"
import { css } from "styled-components"
import { VARIANT_DEFAULT } from "./_constants"

export default themeProps => props => {
  const { variant = VARIANT_DEFAULT } = props

  const name = themeProps.hasOwnProperty("name") ? themeProps.name : themeProps

  if (
    !props.theme ||
    !deepfind(props.theme, name) ||
    !deepfind(props.theme, name)[variant]
  ) {
    return null
  }

  return css`
    ${deepfind(props.theme, name)[variant]};
  `
}
