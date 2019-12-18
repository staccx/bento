import React from "react"
import EmailInput from "./EmailInput"
import Wrapper from "../../../Layout/Wrapper/Wrapper"

const preview = {
  title: "EmailInput",
  category: "Components/Forms/Input",
  tags: [],
  component: EmailInput,
  render: props => (
    <Wrapper>
      <EmailInput {...props} />
    </Wrapper>
  )
}

export default preview
