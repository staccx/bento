import React from "react"
import { Button } from "@staccx/base"
import Documentation from "./Documentation"
import ComponentDocumentation from "./ComponentDocumentation"
import TextDocumentation from "./TextDocumentation"

const ButtonDocumentation = () => (
  <Documentation title="Button">
    <TextDocumentation
      component={<Button />}
      themify={Button.themeProps}
      themifyDescription={["Styling for button"]}
    >
      The default button that we use
    </TextDocumentation>
    <ComponentDocumentation>
      # Button
      <Button>This the button-text</Button>
    </ComponentDocumentation>
  </Documentation>
)

export default ButtonDocumentation
