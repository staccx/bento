import React from "react"
import { useInputMask } from "../useInputMask"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "hooks/useInputMask/Credit Card"
}

export const CreditCard = args => {
  const inputProps = useInputMask({
    mode: "creditcard",
    ...args
  })
  return <input {...inputProps} />
}
CreditCard.args = {}

export const DelayedController = args => {
  const value = useDelayedValue("4925360712345602")
  const inputProps = useInputMask({
    mode: "creditcard",
    value,
    ...args
  })
  return <input {...inputProps} />
}

DelayedController.args = {}
