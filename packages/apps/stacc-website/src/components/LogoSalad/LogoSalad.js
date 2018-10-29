import React from "react"
import styled from "styled-components"
import {
  Wrapper,
  ItemGroup,
  Heading,
  Layout,
  Button,
  theming
} from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"

const LogoSalad = ({ children, className }) => (
  <FullWidth>
    <Container className={className}>
      <Wrapper>
        <Layout paddingTop="large" paddingBottom="large" rowGap="large">
          <Heading level={3}>
            We help both established and growing companies achieve their goals
          </Heading>

          <Salad spacing="large">
            <div>
              <img src="/img/banklogos/nordea.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/sparebankenvest.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/eika.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/bankaustria.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/monobank.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/easybank.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/fundu.svg" alt="Nordea" />
            </div>
            <div>
              <img src="/img/banklogos/aprila.svg" alt="Nordea" />
            </div>
          </Salad>
          <div>
            <Button>Read our success stories</Button>
          </div>
        </Layout>
      </Wrapper>
    </Container>
  </FullWidth>
)

const Container = styled.div`
  text-align: center;
  background-color: ${theming.color("g4")};
`

const Salad = styled(ItemGroup)`
  > * {
    justify-content: center;
    align-items: center;
  }
`

export default LogoSalad
