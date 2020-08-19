import React from "react"
import ThemeComponent from "./ThemeComponent"

export default {
  title: "New/Components/Theme/ThemeComponent",
  component: ThemeComponent
}

export const Default = args => {
  return (
    <div>
      <div>Change theme to see the component change</div>
      <br />
      <ThemeComponent {...args} />
    </div>
  )
}

Default.args = {
  tagName: "logo",
  fallback: () => <div>This theme has no logo</div>
}
