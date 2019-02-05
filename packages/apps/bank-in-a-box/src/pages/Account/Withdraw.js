import React from "react"
import PropTypes from "prop-types"
import { formatPhone, formatCurrency } from "@staccx/formatting"
import {
  Button,
  Layout,
  LayoutItem,
  CurrencyInput,
  AccountInput,
  Alert,
  Heading,
  Box,
  Text,
  State,
  Form,
  FormField
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const Withdraw = ({ lastAccount = null, amount, onSubmit }) => (
  <State>
    {({ set, toAccount }) => (
      <Layout variant="withdraw">
        <LayoutItem variant="fadeIn" delay="200" area="header">
          <Heading level="1" variant="primary">
            <TranslatedText i18nKey="ta-ut-penger">Ta ut penger</TranslatedText>
          </Heading>
          <Heading level="2" variant="withdrawSubtitle">
            {formatCurrency(amount, { precision: 2, decimal: "," })}{" "}
            <TranslatedText i18nKey="disponibelt" fallback="disponibelt" />
          </Heading>
        </LayoutItem>
        <LayoutItem area="menu">
          <Form
            initialValues={{ toAccount, amount }}
            renderButton={() => (
              <LayoutItem variant="fadeIn" delay="800">
                <Button type={"submit"}>
                  <TranslatedText i18nKey="overfør" fallback="Overfør" />
                </Button>
              </LayoutItem>
            )}
            onSubmit={vals => onSubmit(vals)}
          >
            <Layout grid="rows">
              <LayoutItem variant="fadeIn" delay="400">
                <Box variant="withdrawInputs">
                  <FormField name="amount" type="string" required>
                    {({ name, field, form }) => {
                      const { value, ...rest } = field
                      return (
                        <CurrencyInput
                          id={"amount"}
                          label="Beløp"
                          placeholder="0"
                          defaultValue={amount}
                          {...rest}
                          onChange={e =>
                            form.setFieldValue("amount", e.target.rawValue)
                          }
                        />
                      )
                    }}
                  </FormField>

                  <FormField name={"toAccount"} type={"string"} required>
                    {({ name, field, form }) => {
                      const { value, ...rest } = field
                      return (
                        <AccountInput
                          id={"account"}
                          label="Kontonummer"
                          placeholder="XXXX XX XXXXX"
                          defaultValue={toAccount}
                          {...rest}
                          onChange={e =>
                            form.setFieldValue("toAccount", e.target.rawValue)
                          }
                        />
                      )
                    }}
                  </FormField>
                </Box>
              </LayoutItem>
              {lastAccount && (
                <LayoutItem variant="fadeIn" delay="600">
                  <Alert
                    type="info"
                    onClick={() => set({ toAccount: lastAccount })}
                    role="button"
                    tabindex="4"
                    aria-pressed="false"
                  >
                    <TranslatedText
                      i18nKey="siste-innskudd-kom-fra"
                      fallback="Siste innskudd kom fra"
                    />{" "}
                    <Text variant="withdrawAlertNumber">
                      {formatPhone(lastAccount, "XXXX XX XXXXX")}
                    </Text>
                    .{" "}
                    <TranslatedText i18nKey="klikk-for-å-sende-penger">
                      Klikk her for å sende penger tilbake
                    </TranslatedText>
                  </Alert>
                </LayoutItem>
              )}
            </Layout>
          </Form>
        </LayoutItem>
      </Layout>
    )}
  </State>
)

Withdraw.propTypes = {
  toAccount: PropTypes.number,
  amount: PropTypes.number,
  onSubmit: PropTypes.func
}

Withdraw.defaultProps = {
  toAccount: null,
  amount: 0,
  onSubmit: () => null
}

export default Withdraw
