import {addVariablesFactory} from "./addVariablesFactory";
import { RadioPill } from "../../components";
import { css } from "styled-components";

export default {
  title: "Utils/Add Variables Factory",
  component: addVariablesFactory,
  parameters: {
    docs: {
      description: {
        component: `
        # Add Variables.
          Inject css variables into the theme
        `
      },
    }
  },
}

export const NormalUsage = () => {
  const variables = RadioPill.addVariables({
    variant1: css`
      --background-color: 2px;
    `
  })



  return null


}
