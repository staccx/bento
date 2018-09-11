import React from "react"
import { Layout, Wrapper } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import menu from "./../data/menu"
import Account from "./../components/Account"

const Overview = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <Account />
      <ThemeComponent tagName={"menu"} menuElements={menu} history={history} />
      <ThemeComponent tagName={"ad"} />
    </Layout>
  </Wrapper>
)

export default Overview
