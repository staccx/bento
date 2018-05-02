import registerStyle from "./registerStyle";
import { VARIANT_DEFAULT } from "./_constants";
import mergeDeep from "./mergeDeep";

class ThemeManager {
  constructor(baseTheme = {}) {
    this.theme = Object.assign({}, baseTheme);
  }

  get Theme() {
    return this.theme;
  }

  addGlobal(name, value) {
    this.theme = mergeDeep(this.theme, {
      [name]: value
    });
    return this;
  }

  addStyle(style) {
    this.theme = mergeDeep(this.theme, style);
    return this;
  }

  registerStyle(style, name, variant = VARIANT_DEFAULT) {
    this.addStyle(registerStyle(style, name, variant));
    return this;
  }
}

export default ThemeManager;
