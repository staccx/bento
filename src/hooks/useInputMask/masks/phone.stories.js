import React from "react";
import { useDelayedValue } from "./_shared.utils";

export default {
  title: "Components/Input/Masks/Phone",
  component: Input
};

export const Vanilla = args => (
  <Input {...args} mode="phone" onChange={console.log} />
);
Vanilla.args = {};

export const Locale = args => <Input {...args} mode="phone" />;
Locale.args = {
  locale: "DK"
};

export const DelayedControlled = args => {
  const value = useDelayedValue("99696901");

  return <Input id={"delayed_phone"} mode="phone" {...args} value={value} />;
};

DelayedControlled.args = {};
