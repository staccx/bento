import React from "react"
import styled from "styled-components"
import { RadioPill, RadioPillItem } from "@staccx/base"
import { spacing, color } from "@staccx/theme"
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
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  border-left: 1px solid ${color.line};
`

WidthTab.defaultProps = {
  width: "100%"
}

export default WidthTab
