import React from "react"
import { Layout, Button, EmailInput, Input, Wrapper } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import { TranslatedText } from "@staccx/i18n"

const LogIn = ({ history }) => {
  const labelWidth = 90
  return (
    <Wrapper size="small">
      <Layout variant="verticalAlign">
        <Layout>
          <ThemeComponent tagName="logo" />
          <EmailInput label="Epostadresse" labelWidth={labelWidth} />
          <Input label="Passord" labelWidth={labelWidth} />
          <div>
            <Button
              onClick={() =>
                history.push({
                  pathname: "/app/my-car"
                })
              }
              variant="mainNavigation"
            >
              <TranslatedText i18nKey="knapp-logg-inn-side-logg-inn" />
            </Button>
            <Button
              onClick={() =>
                history.push({
                  pathname: "/app/onboarding"
                })
              }
              variant="mainNavigation"
            >
              <TranslatedText i18nKey="knapp-logg-inn-side-bli-kunde" />
            </Button>
          </div>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

export default LogIn
