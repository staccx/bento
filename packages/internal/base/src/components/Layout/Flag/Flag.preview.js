import React from "react"
import Flag from "./Flag"
import Label from "../../Forms/Label/Label"
import Toggle from "../../Forms/Toggle/Toggle"
import Layout from "../Layout/Layout"

const preview = {
  title: "Flag",
  category: "Components/Layout",
  tags: ["layout"],
  component: Flag,
  render: props => (
    <Flag
      responsive={800}
      img={<img src="http://fillmurray.com/100/100" width="100" height="100" />}
      {...props}
    >
      Text for flag-object
    </Flag>
  ),
  renderExampleController: ({ setComponentState }) => (
    <Layout grid="columns">
      <div>
        <Label for="reverseRadio">reverse</Label>
        <Toggle
          id="reverseRadio"
          onChange={e => setComponentState({ reverse: e.target.checked })}
        >
          reverse
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">top</Label>
        <Toggle
          id="topRadio"
          onChange={e => setComponentState({ top: e.target.checked })}
        >
          top
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">bottom</Label>
        <Toggle
          id="bottomRadio"
          onChange={e => setComponentState({ bottom: e.target.checked })}
        >
          bottom
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">flush</Label>
        <Toggle
          id="flushRadio"
          onChange={e => setComponentState({ flush: e.target.checked })}
        >
          flush
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">small</Label>
        <Toggle
          id="smallRadio"
          onChange={e => setComponentState({ small: e.target.checked })}
        >
          small
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">tiny</Label>
        <Toggle
          id="tinyRadio"
          onChange={e => setComponentState({ tiny: e.target.checked })}
        >
          tiny
        </Toggle>
      </div>
      <div>
        <Label for="topRadio">large</Label>
        <Toggle
          id="largeRadio"
          onChange={e => setComponentState({ large: e.target.checked })}
        >
          large
        </Toggle>
      </div>
    </Layout>
  )
}

export default preview
