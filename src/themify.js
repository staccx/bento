import deepfind from "./deepfind";
import { css } from "styled-components";
import { VARIANT_DEFAULT } from "./_constants";

export default name => props => {
  const { themeVariant = VARIANT_DEFAULT } = props;
  if (
    !props.theme ||
    !deepfind(props.theme, name) ||
    !deepfind(props.theme, name)[themeVariant]
  ) {
    return null;
  }

  return css`
    ${deepfind(props.theme, name)[themeVariant]};
  `;
};
