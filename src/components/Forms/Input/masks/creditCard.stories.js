import Input from "../Input";
import React from "react";

export default {
  title: "Components/Input/Masks/Credit Card",
  component: Input
}

export const CreditCard = args => <Input {...args} mode="creditcard" />
CreditCard.args = {
  label: "Vanilla credit card",
  level: 1
}
