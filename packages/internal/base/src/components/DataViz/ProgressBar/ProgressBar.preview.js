import React from "react"
import ProgressBar from "./ProgressBar"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import Label from "../../Forms/Label/Label"
import Slider from "../../Forms/Slider/Slider/Slider"

const preview = {
  title: "ProgressBar",
  category: "component/Dataviz",
  tags: ["visual", "animated"],
  component: ProgressBar,
  render: props => <ProgressBar progress={80} {...props} />,
  renderExampleController: ({ setComponentState, progress }) => (
    <Wrapper>
      <Label>Progress</Label>
      <Slider
        name={"progressExample"}
        min={0}
        max={100}
        step={1}
        onChange={e =>
          setComponentState({ progress: parseInt(e.target.value, 10) })
        }
        percentage={progress}
      />
    </Wrapper>
  )
}

export default preview
