import React from "react";
import { locales } from "../../../locale";
import { useDelayedValue } from "./_shared.utils";

export default {
  title: "hooks/useInputMask/National Id"
};

export const Vanilla = args => <input {...args} mode="nationalid" />;
Vanilla.args = {};

export const Locale = args => <input {...args} mode="nationalid" />;
Locale.args = {
  locale: locales.Finland
};

export const DelayedControlled = args => {
  const value = useDelayedValue("01065100394");

  return (
    <input id={"delayed_national"} mode="nationalid" {...args} value={value} />
  );
};

DelayedControlled.args = {};
