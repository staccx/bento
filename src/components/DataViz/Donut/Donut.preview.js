import React from "react"
import Donut from "./Donut"
import Slider from "../../Forms/Slider/Slider/Slider"
import Label from "../../Forms/Label/Label"
import Wrapper from "../../Layout/Wrapper/Wrapper"

const preview = {
  title: "Donut",
  category: "Components/Dataviz",
  tags: ["component", "dataviz"],
  component: Donut,
  render: props => <Donut progress={0.25} {...props} />,
  renderExampleController: ({ setComponentState }) => (
    <Wrapper>
      <Label>Progress</Label>
      <Slider
        name={"DonutExample"}
        min={0}
        max={1}
        value={0.25}
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
