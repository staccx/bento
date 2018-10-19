import React from "react"
import styled from "styled-components"
import { RadioPill, RadioPillItem, theming } from "@staccx/base"
import sizes from "../data/sizes"

const WidthTab = ({ onChange, width }) => (
  <Width>
    <RadioPill
      variant="documentationHeaderLang"
      group={"size"}
      onChange={onChange}
    >
      {sizes.map(size => (
        <RadioPillItem
          key={size}
          value={size}
          id={size}
          defaultChecked={width === size}
        >
          {size}
        </RadioPillItem>
      ))}
    </RadioPill>
  </Width>
)

const Width = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${theming.spacing.small};
  padding-right: ${theming.spacing.small};
  border-left: 1px solid ${theming.color.line};
`

WidthTab.defaultProps = {
  width: "100%"
}

export default WidthTab
