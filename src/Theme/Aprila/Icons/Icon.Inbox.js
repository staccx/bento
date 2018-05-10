import React from "react"
import { Outer, Icon } from "./Icon.Styles"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"

const IconInbox = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M 2.5371094 6 L 13.810547 16.521484 C 14.477547 17.145484 15.523453 17.145484 16.189453 16.521484 L 27.462891 6 L 2.5371094 6 z M 1 7.3007812 L 1 24 L 29 24 L 29 7.3007812 L 17.554688 17.982422 C 16.837688 18.651422 15.919 18.986328 15 18.986328 C 14.081 18.986328 13.162312 18.651422 12.445312 17.982422 L 1 7.3007812 z" />
    </Icon>
  </Outer>
)

export const IconInboxStyle = registerStyle(
  { [VARIANT_DEFAULT]: IconInbox },
  "iconInbox"
)
export default IconInbox
