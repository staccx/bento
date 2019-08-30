import React from "react"
import { storiesOf } from "@storybook/react"
import SkeletonCircle from "./Skeleton.Circle"
import SkeletonLine from "./Skeleton.Line"
import SkeletonPulse from "./Skeleton.Pulse"

storiesOf("components|base/Skeleton", module)
  .add("SkeletonCircle", () => {
    return <SkeletonCircle />
  })
  .add("SkeletonLine", () => {
    return <SkeletonLine />
  })
  .add("SkeletonPulse", () => {
    return <SkeletonPulse />
  })
