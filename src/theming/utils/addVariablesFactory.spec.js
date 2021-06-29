import get from "lodash.get";
import { css } from "styled-components";
import { addVariablesFactory } from "./addVariablesFactory";
import RadioPill from "../../components/Forms/RadioPill/RadioPill.js";
import { themes, Theme } from "../index";
import Alert from "../../components/Alert/Alert";

let addVariables = () => null;
describe("addVariables Function Factory", () => {
  beforeAll(() => {
    addVariables = addVariablesFactory(RadioPill);
  });
  beforeEach(() => {
    themes._default = new Theme();
  });
  it("Default theme", () => {
    addVariables({
      custom: css`
        --navbutton_background_color: #ffffff;
      `
    });
    expect(get(themes, "_default.variables.RadioPill.custom")).toBeDefined();
  });

  it("Multiple themes", () => {

    addVariables({
      custom: css`
        --navbutton_background_color: #ffffff;
      `
    });

    const variable = css`
          --navbutton_background_color: #000;
        `
    addVariables(
      {
        custom: variable
      },
      "myTheme"
    );

    const myTheme = themes.myTheme;
    expect(myTheme).not.toBeNull();
    expect(get(myTheme, "variables.RadioPill.custom")).toEqual(variable);

    addVariables(
      {
        text: "text value"
      },
      "myTheme"
    );

    expect(myTheme.variables.RadioPill.text).toStrictEqual("text value");
  });

  it("Doesnt work without a component", () => {
    expect(() => addVariables(null)).toThrow();
  });

  it("Component can be called with no fields defined", () => {
    expect(() => addVariables({})).not.toThrow();
  });

  it("Should not work without variables", () => {
    expect(addVariables).toThrow(); // will call function without parameters
  });

  describe("Factory", () => {
    it("Should not work without component", () => {
      expect(addVariablesFactory()).toThrow(); // will call function without parameters
    });
  })
});
