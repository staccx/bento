import React from "react"
import Transform from "./Transform"

export default {
  title: "Components/i18n/Transform",
  component: Transform
}

export const Key = args => <Transform {...args} />
Key.args = {
  data: {
    no: "Tester",
    dk: "Tester på dansk",
    se: "tjenare",
    fi: "Ei saa peitaa",
    us: "America first"
  }
}
