import React from "react"
import { RadioPill, RadioPillItem } from "@staccx/base"
import tabs from "../data/tabs"

const ViewTab = ({ onChange }) => (
  <RadioPill group={"tabs"} onChange={onChange}>
    <RadioPillItem
      key={"preview"}
      id={"preview"}
      value={tabs.preview}
      defaultChecked
    >
      {tabs.preview}
    </RadioPillItem>
    <RadioPillItem key={"variants"} id={"variants"} value={tabs.variants}>
      {tabs.variants}
    </RadioPillItem>
    <RadioPillItem id={"usage"} key={"usage"} value={tabs.usage}>
      {tabs.usage}
    </RadioPillItem>
    <RadioPillItem id={"component"} key={"component"} value={tabs.htmlSource}>
      {tabs.htmlSource}
    </RadioPillItem>

    <RadioPillItem id={"Source"} key={"Source"} value={tabs.jsSource}>
      {tabs.jsSource}
    </RadioPillItem>
  </RadioPill>
)

export default ViewTab
