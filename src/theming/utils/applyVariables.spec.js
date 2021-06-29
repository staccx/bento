import { applyVariables } from "./applyVariables";
import {css} from "styled-components";

const props = {
  theme: {
    "variables.Button": {
      _default: css`
        --borderRadius: "4px";
      `,
      custom: css`
        --borderRadius: "2px"
      `
    },
    Button: {
      _default: `
        color: blue;
      `,
      custom: `
        color: red;
      `
    },
    Label: {
      _default: `
        color: white;
      `,
      custom: `
        color: palegoldenrod;
      `
    }
  }
}

const applyFunc = applyVariables("Button")
describe("Apply variables", () => {
  it("SHould apply to theme", () => {
    expect(applyFunc(props)).toEqual(css`
        --borderRadius: "4px";
      `)
  })
  it("Should handle variants", () => {
    expect(applyFunc({
      ...props,
      variant: "custom"
    })).toBe(props.theme["variables.Button"].custom)
  })
})
