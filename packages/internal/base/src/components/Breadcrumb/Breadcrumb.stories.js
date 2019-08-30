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
          name: "First level",
          to: "/"
        },
        {
          name: "Second level",
          to: "/level-2"
        },
        {
          name: "Third level",
          to: "/level-3"
        },
        {
          name: "Fourth level"
        }
      ]}
    />
  ))
  .add("With many objects", () => (
    <Breadcrumb
      path={[
        {
          name: "First level",
          to: "/"
        },
        {
          name: "Second level",
          to: "/"
        },
        {
          name: "Third level",
          to: "/"
        },
        {
          name: "Fourth level",
          to: "/"
        },
        {
          name: "Fifth level",
          to: "/"
        },
        {
          name: "Sixth level",
          to: "/"
        },
        {
          name: "Sevent level",
          to: "/"
        },
        {
          name: "Eight level",
          to: "/"
        }
      ]}
    />
  ))
