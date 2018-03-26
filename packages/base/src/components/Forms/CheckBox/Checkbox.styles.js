import { css } from "styled-components"

const CheckWrapper = css`
  min-height: ${p => p.theme.globals.targetSize.normal};
  padding-top: ${p => p.theme.globals.spacing.small};
  padding-bottom: ${p => p.theme.globals.spacing.small};
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
  color: ${p => p.theme.globals.color.primary};
`

const InputCheck = css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label {
    > svg {
      transform: scale(1);
    }
  }

  &:focus ~ label {
    &::before {
      border-color: ${p => p.theme.globals.color.primary};
    }
  }
`

const Label = css`
  padding: 0 0 0 ${p => p.theme.globals.spacing.mediumPlus};
  position: relative;
  font-weight: normal;
  letter-spacing: normal;
  width: auto;
  cursor: pointer;
  font-family: ${p => p.theme.globals.font.body};
  font-family: ${p => p.theme.globals.font.size.input};
  line-height: 1.6;
  display: inline-block;

  &::before {
    content: "";
    background: ${p => p.theme.globals.color.bg};
    border: 1px solid ${p => p.theme.globals.color.line};
    display: block;
    height: ${p => p.theme.globals.spacing.medium};
    left: 0;
    position: absolute;
    top: 0;
    width: ${p => p.theme.globals.spacing.medium};
  }

  &:hover {
    &::before {
      border-color: ${p => p.theme.globals.color.primary};
    }
  }
`

export default {
  CheckWrapper,
  IconCheck,
  InputCheck,
  Label
}
