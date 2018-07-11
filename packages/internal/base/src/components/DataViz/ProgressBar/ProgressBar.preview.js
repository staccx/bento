import React from "react"
import ProgressBar from "./ProgressBar"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import Label from "../../Forms/Label/Label"
import Slider from "../../Forms/Slider/Slider/Slider"

const preview = {
  title: "ProgressBar",
  category: "component",
  tags: ["visual", "animated"],
  component: ProgressBar,
  render: props => <ProgressBar progress={80} {...props} />,
  renderExampleController: ({ setComponentState }) => (
    <Wrapper>
      <Label>Progress</Label>
      <Slider
        min={0}
        max={100}
        step={1}
        onChange={e => setComponentState({ progress: e.target.value })}
      />
    </Wrapper>
  )
}

export default preview
