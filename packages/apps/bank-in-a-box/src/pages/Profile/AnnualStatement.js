import React from "react"
import styled from "styled-components"
import { Layout, Wrapper, LayoutItem, ThemeComponent } from "@staccx/base"
import Back from "../../components/Back"

const AnnualStatement = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Back history={history} path="/profile/" />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <Center>
          <ThemeComponent tagName="IllustrationAnnualStatement" />
        </Center>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const Center = styled.div`
  text-align: center;
`

export default AnnualStatement
