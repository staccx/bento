import React from "react"
import FocusTrap from "./FocusTrap"

export default {
  title: "New/FocusTrap",
  component: FocusTrap
}

export const FocusTrapDefault = args => (
  <div tabIndex="0">
    This is outside the focus trap
    <FocusTrap {...args}>
      <>
        <span>This is within</span>
        <div>
          <p>Some more text</p>
        </div>
        <button>This is focusable</button>
        <button>This is focusable</button>
      </>
    </FocusTrap>
  </div>
)
FocusTrapDefault.args = { options: { clickOutsideDeactivates: false } }
