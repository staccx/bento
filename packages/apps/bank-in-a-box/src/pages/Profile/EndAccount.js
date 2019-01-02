import React from "react"
import {
  Layout,
  LayoutItem,
  List,
  Heading,
  AccountInput,
  Button,
  ItemGroup
} from "@staccx/base"
import Back from "../../components/Back"
import EndAccountList from "../../components/EndAccountList"
import { backwards, forwards } from "../../components/transitions/transitions"

const EndAccount = ({ history, accounts }) => (
  <Layout variant="annualStatment">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/profile/" />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Heading level="1">Avslutt konto</Heading>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <Layout>
        <List variant="open">
          {/* TODO: This is hacked together */}
          <EndAccountList bookedBalance={12776.94} accruedInterest={1} />
        </List>
        <div>
          <AccountInput
            label="Send beløp til kontonummer"
            variant="accountNumber"
          />
        </div>
        <ItemGroup>
          {/* TODO: disse må lenkes opp og ha en onClick */}
          <Button
            variant="primary"
            onClick={() =>
              history.push({
                pathname: "/profile/end/confirmation",
                state: forwards
              })
            }
          >
            Overfør og avslutt konto
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              history.push({
                pathname: "/profile",
                state: backwards
              })
            }
          >
            Avbryt
          </Button>
        </ItemGroup>
      </Layout>
    </LayoutItem>
  </Layout>
)

export default EndAccount
