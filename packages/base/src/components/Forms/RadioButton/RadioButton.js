import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Radio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label::after {
    transform: scale(1);
  }
`

const Label = styled.label`
  position: relative;
  padding: 0 0 0 ${p => p.theme.globals.spacing.mediumPlus};
  width: auto;
  letter-spacing: normal;
  font-family: ${p => p.theme.globals.font.body};
  font-size: ${p => p.theme.globals.font.size.input};
  font-weight: normal;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    width: ${p => p.theme.globals.spacing.medium};
    height: ${p => p.theme.globals.spacing.medium};
    border: 1px solid ${p => p.theme.globals.color.line};
    border-radius: 50%;
    background: ${p => p.theme.globals.color.white};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 4px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${p => p.theme.globals.color.primary};
    line-height: 20px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
`

const RadioWrapper = styled.div`
  min-height: ${p => p.theme.globals.targetSize.normal};
  padding-top: ${p => p.theme.globals.spacing.small};
  padding-bottom: ${p => p.theme.globals.spacing.small};

  &:hover,
  ${Radio}:focus ~ {
    ${Label} {
      &::before {
        border-color: ${p => p.theme.globals.color.wcag};
      }
    }
  }
`

const RadioButton = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  ...otherProps
}) => (
  <RadioWrapper className={className}>
    <Radio
      id={id}
      disabled={disabled}
      type="radio"
      name={group}
      onChange={onChange}
      defaultChecked={defaultChecked}
      {...otherProps}
    />
    <Label htmlFor={id}>{children}</Label>
  </RadioWrapper>
)

RadioButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

RadioButton.defaultProps = {
  className: "",
  defaultChecked: false,
  disabled: false,
  input: {},
  onChange: null,
  value: ""
}

export default RadioButton
