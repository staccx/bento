import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../../Styles/hideVisually"

const RadioPillItem = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  value,
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
      value={value}
      {...otherProps}
    />
    <Label htmlFor={id}>{children}</Label>
  </RadioWrapper>
)

const borderRadiusRadioPill = "6px"

const Label = styled.label`
  position: relative;
  padding: ${p => p.theme.spacing.tiny} ${p => p.theme.spacing.small};
  border: 1px solid ${p => p.theme.color.line};
  ${"" /* width: auto; */} cursor: pointer;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.input};
  letter-spacing: normal;
  font-weight: normal;

  margin-right: -1px;
`

const Radio = styled.input`
  ${hideVisually};
  &:checked {
    ~ ${Label} {
      color: ${p => p.theme.color.primary};
      z-index: 1;
    }

    &:first-child ~ ${Label} {
      border-color: ${p => p.theme.color.primary};
    }

    &:nth-child(2) ~ ${Label} {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

const RadioWrapper = styled.div`
  display: inline-block;
  min-height: ${p => p.theme.targetSize.normal};
  padding-top: ${p => p.theme.spacing.small};
  padding-bottom: ${p => p.theme.spacing.small};

  &:first-child {
    ${Label} {
      border-top-left-radius: ${borderRadiusRadioPill};
      border-bottom-left-radius: ${borderRadiusRadioPill};
    }
  }

  &:last-child {
    ${Label} {
      border-top-right-radius: ${borderRadiusRadioPill};
      border-bottom-right-radius: ${borderRadiusRadioPill};
      border-right-width: 1px;
      margin-right: 0;
    }
  }

  &:hover,
  ${Radio}:focus ~ {
    ${Label} {
      z-index: 1;
      border-color: ${p => p.theme.color.primary};
    }
  }
`

RadioPillItem.defaultProps = {
  className: "",
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  defaultChecked: false
}

RadioPillItem.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RadioPillItem
