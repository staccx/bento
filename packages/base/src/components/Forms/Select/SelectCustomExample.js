import React from "react"
import styled from "styled-components"

const CustomSelectedContainer = styled.button`
  color: blue;
  cursor: pointer;
`

const CustomOptionsWrapperElement = styled.div`
  border: 1px solid ${p => p.theme.color.primary};
`

const CustomOptionElementWrapper = styled.div`
  background-color: ${props =>
    props.highlighted ? props.theme.color.primary : "white"};
  color: ${props => (props.highlighted ? "white" : props.theme.color.primary)};
`

const CustomOptionElement = ({
  highlighted,
  selected,
  children,
  ...restProps
}) => (
  <CustomOptionElementWrapper
    highlighted={highlighted}
    selected={selected}
    {...restProps}
  >
    {children}
  </CustomOptionElementWrapper>
)

const CustomSelected = ({ selectedItem, buttonProps, ...restProps }) => {
  return (
    <CustomSelectedContainer {...buttonProps} {...restProps}>
      {selectedItem.text} is {selectedItem.value}
    </CustomSelectedContainer>
  )
}

const CustomPlaceholder = styled.input`
  border: 1px solid ${p => p.theme.color.primary};
`

export {
  CustomSelected,
  CustomOptionsWrapperElement,
  CustomOptionElement,
  CustomPlaceholder
}
