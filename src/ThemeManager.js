import registerStyle from "./registerStyle";
import { VARIANT_DEFAULT } from "./_constants";

class ThemeManager {
  constructor(baseTheme = {}) {
    this.theme = baseTheme;
  }

  get Theme() {
    return this.theme;
  }

  addGlobal(name, value) {
    Object.assign(this.theme, {
      [name]: value
    });
    return this;
  }

  addStyle(style) {
    Object.assign(this.theme, style);
    return this;
  }

  registerStyle(style, name, variant = VARIANT_DEFAULT) {
    this.addStyle(registerStyle(style, name, variant));
    return this;
  }
}

export default ThemeManager;
