import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from "./Breadcrumb"

storiesOf("Components|Base/Breadcrumb", module)
  .add("No props", () => <Breadcrumb />)
  .add("Strings as input", () => <Breadcrumb path={["Home", "My Car"]} />)
  .add("Object as input", () => (
    <Breadcrumb
      path={[
        {
          name: "Home",
          to: "/"
        },
        {
          name: "Level 2",
          to: "/level-2"
        },
        {
          name: "Current page"
        },
        {
          name: "Last page",
          to: "/level-4"
        }
      ]}
    />
  ))
  .add("Initial selected", () => (
    <Breadcrumb
      path={[
        {
          name: "Home"
        },
        {
          name: "Level 2",
          to: "/level-2"
        },
        {
          name: "Current page",
          to: "/level-3"
        },
        {
          name: "Last page",
          to: "/level-4"
        }
      ]}
    />
  ))
