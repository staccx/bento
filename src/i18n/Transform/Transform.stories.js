import React from "react"
import Transform from "./Transform"
import { languages } from "../index"

export default {
  title: "Components/i18n/Transform",
  component: Transform,
  parameters: {
    docs: {
      description: {
        component:
          "Note that this renders before the language has been properly changed. This is a bug"
      }
    }
  }
}
/*
This is the description
 */
export const Key = args => <Transform {...args} />
Key.args = {
  data: {
    [languages.Norwegian]: "Tester",
    [languages.Danish]: "Tester på dansk",
    [languages.Swedish]: "tjenare",
    [languages.Finnish]: "Ei saa peitaa",
    [languages.English]: "America first"
  }
}
