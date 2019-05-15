import React from "react"
import { storiesOf } from "@storybook/react"
import Layout from "./Layout"
import LayoutItem from "./LayoutItem"
import styled from "styled-components"
import color from "../../../theming/convenience/color"

storiesOf("components|base/Layout/Layout", module)
  .add("No props", () => (
    <Layout>
      <LayoutItem />
    </Layout>
  ))
  .add("With header,main,body,aside,footer", () => {
    const Block = styled.div`
      background-color: ${color.primary};
      min-height: 50px;
      width: 100%;
      min-width: 50px;
      height: 100%;
    `

    return (
      <Layout grid="columns">
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
    )
  })
