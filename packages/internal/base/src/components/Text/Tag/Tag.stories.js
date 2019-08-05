import React from "react"
import { storiesOf } from "@storybook/react"
import Tag from "./Tag"
import docs from "./Tag.md"

storiesOf("Components|Base/Text/Tag", module)
  .add("No props", () => <Tag>Tag</Tag>, {
    info: {
      text: docs
    }
  })
  .add("With variant", () => <Tag variant={"Something"}>Tag</Tag>, {
    info: {
      text: docs
    }
  })
  .add("With ClassName", () => <Tag className={"Test"}>Tag</Tag>, {
    info: {
      text: docs
    }
  })
