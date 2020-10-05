import React from "react"
import Odometer from "./Odometer"

export default {
  title: "Components/Formatters/Odometer",
  component: Odometer
}

export const OdometerNumber = args => <Odometer {...args} />
OdometerNumber.args = { number: 1000 }

export const OdometerHighNumber = args => <Odometer {...args} />
OdometerHighNumber.args = { number: 10000000 }

export const OdometerLowNumber = args => <Odometer {...args} />
OdometerLowNumber.args = { number: 1 }

export const OdometerSeperatorSteps5 = args => <Odometer {...args} />
OdometerSeperatorSteps5.args = { number: 100000, separatorSteps: 5 }

export const OdometerLowSize = args => <Odometer {...args} />
OdometerLowSize.args = { number: 100000, size: 5 }

export const OdometerLargeSize = args => <Odometer {...args} />
OdometerLargeSize.args = { number: 100000, size: 80 }
