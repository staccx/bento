import React from "react"
import ItemGroup from "./ItemGroup"
import Button from "../../Button/Button"
import RadioPill from "../../Forms/RadioPill/RadioPill"
import RadioPillItem from "../../Forms/RadioPill/RadioPill.Item"

const preview = {
  title: "ItemGroup",
  category: "Components/Layout",
  component: ItemGroup,
  render: props => (
    <ItemGroup {...props}>
      <Button>Lån</Button>
      <Button>Kreditt</Button>
      <Button>Sparing</Button>
      <Button>Om denne banken</Button>
      <Button>Kontakt</Button>
    </ItemGroup>
  ),
  renderExampleController: ({ setComponentState }) => (
    <RadioPill
      full={false}
      group="radiopills"
      onChange={e => setComponentState({ spacing: e.target.value })}
      variant="_default"
    >
      <RadioPillItem id="221e98j" value="huge">
        huge
      </RadioPillItem>
      <RadioPillItem id="5367j" value="large">
        large
      </RadioPillItem>
      <RadioPillItem id="543345" value="mediumPlus">
        mediumPlus
      </RadioPillItem>
      <RadioPillItem id="54455j" value="medium">
        medium
      </RadioPillItem>
      <RadioPillItem id="475dsw" value="small">
        small
      </RadioPillItem>
      <RadioPillItem defaultChecked id="gb43y6n" value="tiny">
        tiny
      </RadioPillItem>
      <RadioPillItem id="@jhkp" value="micro">
        micro
      </RadioPillItem>
      <RadioPillItem id="g43hm76" value="flush">
        flush
      </RadioPillItem>
    </RadioPill>
  )
}

export default preview
