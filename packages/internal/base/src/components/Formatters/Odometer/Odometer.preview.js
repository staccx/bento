import React from "react"
import Odometer from "./Odometer"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import Label from "../../Forms/Label/Label"
import Slider from "../../Forms/Slider/Slider/Slider"

const max = 123456
const preview = {
  title: "Odometer",
  category: "component",
  tags: ["visual"],
  component: Odometer,
  render: props => <Odometer {...props} />,
  renderExampleController: ({ setComponentState, number }) => (
    <Wrapper>
      <Label>Odometer value</Label>
      <Slider
        name={"odometerExample"}
        min={0}
        max={max}
        step={1233}
        onChange={e =>
          setComponentState({ number: parseInt(e.target.value, 10) })
        }
        percentage={(number / max) * 100}
      />
    </Wrapper>
  )
}

export default preview
