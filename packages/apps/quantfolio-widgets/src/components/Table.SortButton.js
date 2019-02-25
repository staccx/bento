import React from "react"
import { Button, ThemeComponent } from "@staccx/base"

const SortButton = ({ label, name, sortRow, isReverse, onClick }) => {
  const active = sortRow === name
  return (
    <Button active={active} variant="sort" onClick={() => onClick(name)}>
      {label}
      <ThemeComponent
        tagName={"SortOrder"}
        direction={active ? (isReverse ? "ASC" : "DESC") : "DESC"}
        active={active}
        fallback={null}
      />
    </Button>
  )
}

export default SortButton
