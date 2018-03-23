import { css } from "styled-components"
import { IconCheck as IconCheckComponent } from "./CheckBox"

const CheckWrapper = css`
  min-height: ${p => p.theme.targetSize.normal};
  padding-top: ${p => p.theme.spacing.small};
  padding-bottom: ${p => p.theme.spacing.small};
`

const IconCheck = css`
  position: absolute;
  left: 2px;
  top: 2px;
  display: block;
  height: 20px;
  width: 20px;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
  color: ${p => p.theme.color.primary};
`

const InputCheck = css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label {
    ${IconCheckComponent} {
      transform: scale(1);
    }
  }

  &:focus ~ label {
    &::before {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

const Label = css`
  padding: 0 0 0 ${p => p.theme.spacing.mediumPlus};
  position: relative;
  font-weight: normal;
  letter-spacing: normal;
  width: auto;
  cursor: pointer;
  font-family: ${p => p.theme.font.body};
  font-family: ${p => p.theme.font.size.input};
  line-height: 1.6;
  display: inline-block;

  &::before {
    content: "";
    background: ${p => p.theme.color.bg};
    border: 1px solid ${p => p.theme.color.line};
    display: block;
    height: ${p => p.theme.spacing.medium};
    left: 0;
    position: absolute;
    top: 0;
    width: ${p => p.theme.spacing.medium};
  }

  &:hover {
    &::before {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

export const CheckboxStyles = {
  CheckWrapper,
  IconCheck,
  InputCheck,
  Label
}
