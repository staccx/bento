import React from "react"
import ProgressBar from "./ProgressBar"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import Label from "../../Forms/Label/Label"
import Slider from "../../Forms/Slider/Slider/Slider"

const preview = {
  title: "ProgressBar",
  category: "Components/Dataviz",
  tags: ["visual", "animated"],
  component: ProgressBar,
  render: props => <ProgressBar progress={80} {...props} />,
  renderExampleController: ({ setComponentState }) => (
    <Wrapper>
      <Label>Progress</Label>
      <Slider
        name={"progressExample"}
        min={0}
        max={1}
        value={0.8}
        step={0.01}
        onChange={e =>
          setComponentState({ progress: parseFloat(e.target.value) })
        }
      />
      <Label>Warning threshold</Label>
      <Slider
        name={"warningThreshold"}
        min={0}
        max={1}
        value={0.9}
        step={0.01}
        onChange={e =>
          setComponentState({
            warningThreshold: parseFloat(e.target.value)
          })
        }
      />
    </Wrapper>
  )
}

export default preview
