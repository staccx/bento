import React from "react"
import { RadioPill, RadioPillItem } from "@staccx/base"
import sizes from "../data/sizes"

const WidthTab = ({ onChange, width }) => (
  <RadioPill group={"size"} onChange={onChange}>
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
)

WidthTab.defaultProps = {
  width: "100%"
}

export default WidthTab
