import Input from "../../../components/Forms/Input/Input"
import React from "react"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "Components/Input/Masks/Credit Card",
  component: Input
}

export const CreditCard = args => <Input {...args} mode="creditcard" />
CreditCard.args = {
  label: "Vanilla credit card",
  level: 1
}

export const DelayedController = args => {
  const value = useDelayedValue("4925360712345602")

  return (
    <Input id={"delayed_credit"} mode="creditcard" {...args} value={value} />
  )
}

DelayedController.args = {}
