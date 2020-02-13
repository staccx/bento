import React from "react"
import { Layout, LayoutItem, List, State, Heading, Text } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import Back from "../../components/Back"
import AccountFilter from "../../components/AccountFilter"
import { formatPhone } from "@staccx/formatting"
import AnnualStatementList from "../../components/AnnualStatementList"

const AnnualStatement = ({ statements = [], footerText }) => {
  return (
    <State>
      {({ set, selected = statements.length ? statements[0] : null }) => {
        return (
          <Layout variant="annualStatment">
            <LayoutItem variant="fadeIn" delay="200" area="header">
              <Back path="/profile/" />
              <Heading level="2">
                <TranslatedText i18nKey={"arsoppgaver"}>
                  Årsoppgaver
                </TranslatedText>
              </Heading>
            </LayoutItem>

            <LayoutItem variant="fadeIn" delay="400" area="menu">
              <AccountFilter
                years={statements.reduce(
                  (acc, curr) => [...acc, curr.year.toString()],
                  []
                )}
                selected={statements.indexOf(selected)}
                onClick={index => set({ selected: statements[index] })}
              />
            </LayoutItem>
            <LayoutItem variant="fadeIn" delay="600" area="main">
              {selected && (
                <div style={{ marginBottom: "40px" }}>
                  <Heading level="2" variant="annualStatmentHeading">
                    Registreringsnummer
                  </Heading>
                  <Text>
                    {formatPhone(selected.socialSecurityNo, "XXXXXX XXXXX")}
                  </Text>
                </div>
              )}
              <List>
                <AnnualStatementList statement={selected} />
              </List>
            </LayoutItem>
            {selected && (
              <LayoutItem area="ad" style={{ marginTop: "40px" }}>
                <Text>{footerText}</Text>
              </LayoutItem>
            )}
          </Layout>
        )
      }}
    </State>
  )
}

export default AnnualStatement
