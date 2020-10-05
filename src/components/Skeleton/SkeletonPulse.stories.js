import React from "react"
import SkeletonPulse from "./Skeleton.Pulse"
import SkeletonLine from "./Skeleton.Line"

export default {
  title: "Components/Skeleton/SkeletonPulse",
  component: SkeletonPulse,
  SkeletonLine
}

export const SkeletonPulseView = args => (
  <>
    <SkeletonLine {...args} />
    <SkeletonPulse />
  </>
)
SkeletonPulseView.args = { paddingLeft: 40 }
