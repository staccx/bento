import React from "react"
import NewBadge from "./NewBadge"
import Label from "../Forms/Label/Label"
import Layout from "../Layout/Layout/Layout"
import CurrencyInput from "../Forms/Input/CurrencyInput/CurrencyInput"
const preview = {
  title: "Badge",
  category: "Components/Layout",
  tags: ["layout"],
  component: NewBadge,
  render: props => <NewBadge number={props.number || 1} />,
  renderExampleController: ({ setComponentState }) => (
    <Layout grid="columns">
      <div>
        <Label for="reverseRadio">reverse</Label>
        <CurrencyInput
          id={"badgeValue"}
          onChange={e => setComponentState({ number: e.target.value })}
        />
      </div>
    </Layout>
  )
}

export default preview
