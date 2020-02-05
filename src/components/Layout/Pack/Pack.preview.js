import React from "react"
import Pack from "./Pack"
import PackItem from "./PackItem"
import Label from "../../Forms/Label/Label"
import Toggle from "../../Forms/Toggle/Toggle"
import Layout from "../Layout/Layout"

const preview = {
  title: "Pack",
  category: "Components/Layout",
  component: Pack,
  render: props => (
    <Pack {...props}>
      <PackItem>Lån</PackItem>
      <PackItem>Kreditt</PackItem>
      <PackItem>Sparing</PackItem>
      <PackItem>Om denne banken</PackItem>
      <PackItem>Kontakt</PackItem>
    </Pack>
  ),
  renderExampleController: ({ setComponentState }) => (
    <Layout grid="columns">
      <div>
        <Label for="reverseRadio">bottom</Label>
        <Toggle
          id="bottomRadio"
          onChange={e => setComponentState({ bottom: e.target.checked })}
        >
          bottom
        </Toggle>
      </div>
      <div>
        <Label for="reverseRadio">middle</Label>
        <Toggle
          id="middleRadio"
          onChange={e => setComponentState({ middle: e.target.checked })}
        >
          middle
        </Toggle>
      </div>
      <div>
        <Label for="reverseRadio">noWrap</Label>
        <Toggle
          id="noWrapRadio"
          onChange={e => setComponentState({ noWrap: e.target.checked })}
        >
          noWrap
        </Toggle>
      </div>
    </Layout>
  )
}

export default preview
