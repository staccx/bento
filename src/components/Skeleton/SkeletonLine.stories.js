import React from "react"
import SkeletonLine from "./Skeleton.Line"

export default {
  title: "Components/Skeleton/SkeletonLine",
  component: SkeletonLine
}

export const SkeletonLineView = args => <SkeletonLine {...args} />
SkeletonLineView.args = { paddingLeft: 40, marginLeft: 5 }
