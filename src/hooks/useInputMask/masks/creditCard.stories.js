import React from "react";
import { useDelayedValue } from "./_shared.utils";

export default {
  title: "hooks/useInputMask/Credit Card"
};

export const CreditCard = args => <input {...args} mode="creditcard" />;
CreditCard.args = {
  label: "Vanilla credit card",
  level: 1
};

export const DelayedController = args => {
  const value = useDelayedValue("4925360712345602");

  return (
    <input id={"delayed_credit"} mode="creditcard" {...args} value={value} />
  );
};

DelayedController.args = {};
