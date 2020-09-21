import React from "react"
import NewBadge from "./NewBadge"

export default {
  title: "New/Components/NewBadge",
  component: NewBadge
}

export const NewBadgeView = args => <NewBadge {...args} />
NewBadgeView.args = { number: 11 }

export const LongBadgeView = args => <NewBadge {...args} />
LongBadgeView.args = { number: 10000 }

export const ChildrenBadgeView = args => <NewBadge {...args}>Messages</NewBadge>
ChildrenBadgeView.args = { number: 10 }
