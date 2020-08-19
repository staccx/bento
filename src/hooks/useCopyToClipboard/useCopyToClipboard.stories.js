import React, { useState, useRef } from "react"
import { useCopyToClipboard } from "./useCopyToClipboard"
import Button from "../../components/Button/Button"
import Input from "../../components/Forms/Input/Input"

export default {
  title: "new/Hooks/useCopyToClipboard",
  component: useCopyToClipboard
}

export const UseCopyToClipboardView = args => {
  const ref = useRef(null)
  const [input, setInput] = useState("")
  const [saved, setSaved] = useState(null)
  const values = useCopyToClipboard(saved)
  return (
    <div>
      <Input
        ref={ref}
        onChange={e => setInput(e.target.value)}
        style={{ width: 100 }}
      />
      <Button
        onClick={() => {
          setSaved(input)
          ref.current.value = ""
          ref.current.focus()
        }}
      >
        Click to copy
      </Button>
      <ul>
        {values.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
