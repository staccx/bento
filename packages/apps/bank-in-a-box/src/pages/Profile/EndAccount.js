import React from "react"
import {
  Layout,
  LayoutItem,
  List,
  Heading,
  AccountInput,
  Button,
  ItemGroup,
  Alert
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import Back from "../../components/Back"
import EndAccountList from "../../components/EndAccountList"

const EndAccount = ({
  history,
  bookedBalance,
  accruedInterest,
  onAccountChange,
  onConfirm,
  onCancel,
  messages
}) => (
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
          <EndAccountList
            bookedBalance={bookedBalance}
            accruedInterest={accruedInterest}
          />
        </List>
        <div>
          <AccountInput
            label="Send beløp til kontonummer"
            variant="accountNumber"
            onChange={e => onAccountChange(e.target.rawValue)}
          />
          {messages &&
            messages.map(message => (
              <Alert key={message} type="info">
                <TranslatedText i18nKey={message} />
              </Alert>
            ))}
        </div>
        <ItemGroup>
          {/* TODO: disse må lenkes opp og ha en onClick */}
          <Button variant="primary" onClick={onConfirm}>
            <TranslatedText i18nKey={"overfor-og-avslutt"}>
              Overfør og avslutt konto
            </TranslatedText>
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            <TranslatedText i18nKey={"avbryt"}>Avbryt</TranslatedText>
          </Button>
        </ItemGroup>
      </Layout>
    </LayoutItem>
  </Layout>
)

export default EndAccount
