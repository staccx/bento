import React from "react"
import { Button, ThemeComponent } from "@staccx/base"

const SortButton = ({ label, direction = "DESC", active }) => {
  return (
    <Button active={active} variant="sort">
      {label}
      <ThemeComponent
        tagName={"SortOrder"}
        direction={direction}
        active={active}
        fallback={null}
      />
    </Button>
  )
}

export default SortButton
