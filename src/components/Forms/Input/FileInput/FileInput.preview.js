import React from "react"
import FileInput from "./FileInput"
import Wrapper from "../../../Layout/Wrapper/Wrapper"
import Input from "../Input"
import CheckBox from "../../CheckBox/CheckBox"

const preview = {
  title: "FileInput",
  category: "Components/Forms/Input",
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
  ),
  renderExampleController: ({
    setComponentState,
    progress,
    multiple,
    showFileName
  }) => (
    <Wrapper>
      <div>
        <CheckBox
          id="1ui2bjqre"
          onChange={e => setComponentState({ multiple: !multiple })}
        >
          Multiple
        </CheckBox>
      </div>
      <div>
        <CheckBox
          id="asfdg"
          defaultChecked
          onChange={e => setComponentState({ showFileName: !!showFileName })}
        >
          Show file name
        </CheckBox>
      </div>
      <div>
        <Input
          label="Single file label"
          id="rtyukjhgfd"
          onChange={e => setComponentState({ singleFileLabel: e.target.value })}
        />
      </div>
      <div>
        <Input
          label="Multiple files label"
          id="567ikuyhjgfd"
          onChange={e =>
            setComponentState({ multipleFilesLabel: e.target.value })
          }
        />
      </div>
    </Wrapper>
  )
}

export default preview
