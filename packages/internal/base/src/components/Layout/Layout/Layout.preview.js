import React from "react"
import styled from "styled-components"
import { color } from "@staccx/theme"
import Layout from "./Layout"
import LayoutItem from "./LayoutItem"
import RadioPill from "../../Forms/RadioPill/RadioPill"
import RadioPillItem from "../../Forms/RadioPill/RadioPill.Item"
import Legend from "../../Forms/Legend/Legend"

const preview = {
  title: "Layout",
  category: "Components/Layout",
  component: Layout,
  render: props => (
    <Layout {...props}>
      <LayoutItem area="header">
        <Block />
      </LayoutItem>
      <LayoutItem area="main">
        <Block />
      </LayoutItem>
      <LayoutItem area="body">
        <Block />
      </LayoutItem>
      <LayoutItem area="aside">
        <Block />
      </LayoutItem>
      <LayoutItem area="footer">
        <Block />
      </LayoutItem>
    </Layout>
  ),
  renderExampleController: ({ setComponentState }) => (
    <Layout grid="columns">
      <div>
        <Legend>Grid</Legend>
        <RadioPill
          group="grids"
          onChange={e => setComponentState({ grid: e.target.value })}
        >
          <RadioPillItem defaultChecked id="fds387j" value={null}>
            default
          </RadioPillItem>
          <RadioPillItem id="221e98j" value="stonehenge">
            stonehenge
          </RadioPillItem>
          <RadioPillItem id="5367j" value="columnNarrow">
            columnNarrow
          </RadioPillItem>
          <RadioPillItem id="543345" value="fiftyFifty">
            fiftyFifty
          </RadioPillItem>
          <RadioPillItem id="54455j" value="rows">
            rows
          </RadioPillItem>
          <RadioPillItem id="475dsw" value="columns">
            columns
          </RadioPillItem>
          <RadioPillItem id="gb43y6n" value="form">
            form
          </RadioPillItem>
          <RadioPillItem id="@jhkp" value="centered">
            centered
          </RadioPillItem>
          <RadioPillItem id="g43hm76" value="dashboard">
            dashboard
          </RadioPillItem>
        </RadioPill>
      </div>
    </Layout>
  )
}

// TODO: We need to document all of these better

const Block = styled.div`
  background-color: ${color.primary};
  min-height: 48px;
  width: 100%;
  min-width: 48px;
  height: 100%;
`

export default preview
