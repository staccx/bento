import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import ProgressBar from "./ProgressBar"
import docs from "./ProgressBar.md"

storiesOf("components|base/DataViz/ProgressBar", module)
  .addDecorator(withKnobs)
  .add(
    "DefaultValue 0.5",
    () => {
      const label = "Progress"
      const defaultValue = "0.5"
      const options = {
        range: true,
        min: 0,
        max: 1,
        warningThreshold: 0.85,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return (
        <ProgressBar
          progress={value}
          warningThreshold={options.warningThreshold}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "WarningTreshold 0.2",
    () => {
      const label = "Progress"
      const defaultValue = "0.5"
      const options = {
        range: true,
        min: 0,
        max: 1,
        warningThreshold: 0.2,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return (
        <ProgressBar
          progress={value}
          warningThreshold={options.warningThreshold}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "DefaultValue not set",
    () => {
      const label = "Progress"
      const defaultValue = " "
      const options = {
        range: true,
        min: 0,
        max: 1,
        warningThreshold: 0.2,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return (
        <ProgressBar
          progress={value}
          warningThreshold={options.warningThreshold}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "DefaultValue max",
    () => {
      const label = "Progress"
      const defaultValue = 1
      const options = {
        range: true,
        min: 0,
        max: 1,
        warningThreshold: 0.8,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return (
        <ProgressBar
          progress={value}
          warningThreshold={options.warningThreshold}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "DefaultValue over max",
    () => {
      const label = "Progress"
      const defaultValue = 200
      const options = {
        range: true,
        min: 0,
        max: 1,
        warningThreshold: 0.2,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return (
        <ProgressBar
          progress={value}
          warningThreshold={options.warningThreshold}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
