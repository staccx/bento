import React from "react"
import ProgressBar from "./ProgressBar"

export default {
  title: "New/ProgressBar",
  component: ProgressBar
}

export const OneHundredPercent = args => <ProgressBar {...args} />
OneHundredPercent.args = { progress: 1 }

export const LowThreshold = args => <ProgressBar {...args} />
LowThreshold.args = { progress: 0.2, warningThreshold: 0.1 }

export const OverOneHundredPercent = args => <ProgressBar {...args} />
OverOneHundredPercent.args = { progress: 1.1 }

export const UnderZeroPercent = args => <ProgressBar {...args} />
UnderZeroPercent.args = { progress: -0.1 }

export const ThresholdUnderZeroPercent = args => <ProgressBar {...args} />
ThresholdUnderZeroPercent.args = { progress: 0.2, warningThreshold: -0.1 }

export const ThresholdOverOneHundredPercent = args => <ProgressBar {...args} />
ThresholdOverOneHundredPercent.args = { progress: 1, warningThreshold: 1.5 }
