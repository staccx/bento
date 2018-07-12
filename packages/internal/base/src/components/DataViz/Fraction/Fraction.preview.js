import React from "react"
import Fraction from "./Fraction"
import Wrapper from "../../Layout/Wrapper/Wrapper"
import Label from "../../Forms/Label/Label"
import Slider from "../../Forms/Slider/Slider/Slider"

const preview = {
  title: "Fraction",
  category: "Components/Dataviz",
  tags: ["component", "dataviz"],
  component: Fraction,
  render: props => <Fraction value={3} max={6} {...props} />,
  renderExampleController: ({ setComponentState, max, value }) => (
    <Wrapper>
      <Label>Max</Label>
      <Slider
        name={"FractionMaxExample"}
        min={0}
        max={10}
        step={1}
        onChange={e => setComponentState({ max: parseInt(e.target.value, 10) })}
        percentage={(max / 10) * 100}
      />
      <Label>Value</Label>
      <Slider
        name={"FractionValueExample"}
        min={0}
        max={max}
        step={1}
        onChange={e =>
          setComponentState({ value: parseInt(e.target.value, 10) })
        }
        percentage={(value / max) * 100}
      />
    </Wrapper>
  )
}

export default preview
