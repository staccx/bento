import React from 'react'
import {RadioPill, RadioPillItem} from '@staccx/base'

const steps = [1, 2,3,4,5,6]

const Stepper = () => (
  <RadioPill group={'stepper'}>
    {steps.map(step => (
      <RadioPillItem key={step} id={`step-${step}`}>
        {step.toString()}
      </RadioPillItem>
    ))}
  </RadioPill>
)

export default Stepper