import React from "react"
import FileInput from "./FileInput"

const preview = {
  title: "FileInput",
  category: "Components/Forms",
  tags: ["visual"],
  component: FileInput,
  render: props => (
    <div>
      <FileInput
        group="signer"
        id="idjadsj"
        onChange={() => console.log("You changed it")}
        {...props}
      >
        Upload something
      </FileInput>
    </div>
  )
}

export default preview
