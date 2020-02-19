import React from "react"
import styled from "styled-components"
import { Layout, LayoutItem, List, State, Heading, Text } from "@staccx/base"
import { SanityBlockContent, serializers } from "@staccx/sanity"
import { TranslatedText, i18nInstance } from "@staccx/i18n"
import Back from "../../components/Back"
import AccountFilter from "../../components/AccountFilter"
import { formatPhone } from "@staccx/formatting"
import AnnualStatementList from "../../components/AnnualStatementList"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin-bottom: ${p => p.theme.spacing.tiny};
  }
`

const AnnualStatement = ({ statements = [], footer, profile }) => {
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
                <div style={{ marginBottom: "10px" }}>
                  <strong>Fødselsnummer: </strong>
                  <Text>
                    {formatPhone(selected.socialSecurityNo, "XXXXXX XXXXX")}
                  </Text>
                  <br />
                  <strong>Navn: </strong>
                  <Text>
                    {profile.firstName} {profile.lastName}
                  </Text>
                </div>
              )}
              <List>
                <AnnualStatementList statement={selected} />
              </List>
              {selected && (
                <>
                  <div style={{ marginTop: "30px" }}>
                    <strong>
                      <TranslatedText i18nKey="til-bruk-ved-kontroll-selvangivelse">
                        Til bruk ved kontroll/utfylling av selvangivelse
                      </TranslatedText>
                    </strong>
                  </div>
                  <List>
                    <AnnualStatementList
                      statement={{ items: selected.controlItems }}
                    />
                  </List>
                </>
              )}
            </LayoutItem>
            {selected && (
              <LayoutItem area="ad" style={{ marginTop: "30px" }}>
                <SanityBlockContent
                  blocks={footer}
                  serializers={{ ...serializers, container: Container }}
                />
              </LayoutItem>
            )}
          </Layout>
        )
      }}
    </State>
  )
}

export default AnnualStatement
