import React from "react"
import styled from "styled-components"
import { Layout, LayoutItem, ThemeComponent } from "@staccx/base"
import Back from "../../components/Back"

const AnnualStatement = ({ history, accounts }) => (
  <Layout variant="annualStatment">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/profile/" />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Center>
        <ThemeComponent tagName="IllustrationAnnualStatement" />
      </Center>
    </LayoutItem>
  </Layout>
)

const Center = styled.div`
  text-align: center;
`

export default AnnualStatement
