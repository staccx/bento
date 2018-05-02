import { VARIANT_DEFAULT } from "./_constants";

export default (style, name, variant = VARIANT_DEFAULT) => {
  return {
    [name]: {
      [variant]: style
    }
  };
};
