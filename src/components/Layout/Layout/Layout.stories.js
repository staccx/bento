import React from "react"
import Layout from "./Layout"
import LayoutItem from "./LayoutItem"

export default {
  title: "New/Components/Layout/Layout",
  component: Layout
}

export const StandardLayoutAndLayoutItem = args => (
  <div>
    <Layout
      grid="rows"
      style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}
    >
      <LayoutItem
        area="header"
        style={{ backgroundColor: "#FFFFFF", padding: 24, color: "black" }}
      >
        I'm the header inside a row!
      </LayoutItem>
    </Layout>
    <Layout
      grid="columns"
      columnGap="large"
      style={{ backgroundColor: "#35A7FF", padding: 24, color: "white" }}
    >
      <LayoutItem
        area="body"
        style={{ backgroundColor: "#FFFFFF", padding: 24, color: "black" }}
      >
        I'm the body inside a column!
      </LayoutItem>
      <LayoutItem
        area="aside"
        style={{ backgroundColor: "#FFFFFF", padding: 24, color: "black" }}
      >
        I'm the aside inside a column!
      </LayoutItem>
    </Layout>
    <Layout
      grid="rows"
      style={{ backgroundColor: "#38618C", padding: 24, color: "white" }}
    >
      <LayoutItem
        area="header"
        style={{ backgroundColor: "#FFFFFF", padding: 24, color: "black" }}
      >
        I'm the footer inside a row!
      </LayoutItem>
    </Layout>
  </div>
)
