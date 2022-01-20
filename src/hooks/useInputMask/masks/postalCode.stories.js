import React from "react";

export default {
  title: "hooks/useInputMask/Postal Code"
};

export const Vanilla = args => <input {...args} mode="postalcode" />;
Vanilla.args = {};

export const Locale = args => <input {...args} mode="postalcode" />;
Locale.args = {
  locale: "DK"
};
