import React from "react"
import SkeletonCircle from "./Skeleton.Circle"

export default {
  title: "New/SkeletonCircle",
  component: SkeletonCircle
}

export const SkeletonCircleView = args => <SkeletonCircle {...args} />
SkeletonCircleView.args = { padding: 40 }
