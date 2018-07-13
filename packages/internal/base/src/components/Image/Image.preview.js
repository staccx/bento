import React from "react"
import Image from "./Image"
import Layout from "../Layout/Layout/Layout"
import Label from "../Forms/Label/Label"
import Toggle from "../Forms/Toggle/Toggle"
import Slider from "../Forms/Slider/Slider/Slider"
import Input from "../Forms/Input/Input"

const preview = {
  title: "Image",
  category: "Components/Image",
  tags: ["image"],
  component: Image,
  render: props => (
    <Image src="http://fillmurray.com/280/200" aspectRatio={"1:1"} {...props} />
  ),
  renderExampleController: ({ setComponentState }) => (
    <Layout grid="columns">
      <div>
        <Label for="roundRadio">round</Label>
        <Toggle
          id="roundRadio"
          onChange={e => setComponentState({ round: e.target.checked })}
        >
          round
        </Toggle>
      </div>
      <div>
        <Label>Width</Label>
        <Slider
          name={"WidthExample"}
          min={100}
          max={300}
          step={10}
          onChange={e =>
            setComponentState({ width: parseInt(e.target.value, 10) })
          }
        />
      </div>
      <div>
        <Input
          id="dsag43356"
          label="AspectRatio"
          onChange={e => setComponentState({ aspectRatio: e.target.value })}
          placeholder={"1:1"}
          type="text"
        />
      </div>
    </Layout>
  )
}

export default preview
