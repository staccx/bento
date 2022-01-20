import React, { useState } from "react";
import { useDelayedValue } from "./_shared.utils";

export default {
  title: "hooks/useInputMask/Currency"
};

export const Vanilla = args => <input {...args} mode="currency" />;
Vanilla.args = {};

export const Locale = args => <input {...args} mode="currency" />;
Locale.args = {
  locale: "da-DK"
};

const Test = ({ args }) => {
  const [value1, value1Set] = useState();
  const [value2, value2Set] = useState();

  return (
    <form>
      <input
        {...args}
        id={"one"}
        mode="currency"
        value={value1}
        onChange={e => value1Set(e.rawValue)}
      />
      <input
        {...args}
        id={"two"}
        mode="currency"
        value={value2}
        onChange={e => value2Set(e.rawValue)}
      />
    </form>
  );
};

export const InForm = args => <Test args={args} />;
InForm.args = {};

export const DelayedControlled = args => {
  const [val, valSet] = useState("135792468");
  const value = useDelayedValue(val);

  return (
    <input
      id={"delayed_credit"}
      mode="currency"
      {...args}
      value={value}
      onChange={e => valSet(e.rawValue)}
    />
  );
};

DelayedControlled.args = {};

export const DelayedDefaultValue = args => {
  const value = useDelayedValue("135792468");

  return (
    <input
      id={"delayed_credit"}
      mode="currency"
      {...args}
      defaultValue={value}
    />
  );
};

DelayedControlled.args = {};
