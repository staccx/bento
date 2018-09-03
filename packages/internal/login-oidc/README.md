# Login OIDC

## Install

```bash
yarn add @staccx/login-oidc
```

## Usage

```jsx
import React from "react"
import styled from "styled-components"
import LoginOTP, { stages } from "@staccx/login-oidc"
import { Button, Box, Layout, Loading, Input, PhoneInput } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const oidcConfig = {
  authority: "https://oidc.myclient.staccflow.net",
  client_id: "myclient",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "id_token token",
  scope: "openid"
}

const configEmail = {
  acrValue: "magic-link-email-provider",
  codePostUri: "/api/magic-link-email/magic-link",
  idPostUri: "/api/magic-link-email/request-link",
  callbackPath: "/magic-link-email-callback",
  magicPollUri: "/api/magic-link-email/magic-link-completed"
}

const configSms = {
  acrValue: "magic-link-sms-provider",
  codePostUri: "/api/magic-link-sms/magic-link",
  idPostUri: "/api/magic-link-sms/request-link",
  callbackPath: "/magic-link-sms-callback"
}

const baseConfig = {
  oidcConfig,
  redirectAfterLogin: "/"
}

const Login = props => {
  let config = null
  if (props.type === "email") {
    config = { ...baseConfig, ...configEmail }
  } else if (props.type === "sms") {
    config = config = { ...baseConfig, ...configSms }
  } else {
    config = baseConfig
  }

  return (
    <LoginOTP config={config}>
      {({ stage, handleIdInput, handleCodeInput, submitCode, submitId }) => {
        return (
          <Bg>
            <Layout grid="centered">
              <Box variant="login">
                {stage === null && <Loading />}
                {stage === stages.waitingForCode && (
                  <Layout>
                    <img src="/auto-plan-logo.png" alt="Autoplan" width="220" />
                    <Input
                      onChange={handleCodeInput}
                      id="loggin"
                      label="kode"
                    />

                    <Button variant="primary" onClick={submitCode}>
                      {"valider"}
                    </Button>
                  </Layout>
                )}

                {stage === stages.waitingForId && (
                  <Layout>
                    <img src="/auto-plan-logo.png" alt="Autoplan" width="220" />
                    <TranslatedText i18nKey="LOGIN_PHONE_INPUT_LABEL">
                      {value =>
                        props.type === "sms" ? (
                          <PhoneInput
                            id="loggin"
                            onChange={handleIdInput}
                            label={value}
                          />
                        ) : (
                          <Input
                            id="loggin"
                            onChange={handleIdInput}
                            label={value}
                          />
                        )
                      }
                    </TranslatedText>

                    <TranslatedText i18nKey="LOGIN_PHONE_GETOTP_LABEL">
                      {value => (
                        <Button variant="primary" onClick={submitId}>
                          {value}
                        </Button>
                      )}
                    </TranslatedText>
                  </Layout>
                )}
              </Box>
            </Layout>
          </Bg>
        )
      }}
    </LoginOTP>
  )
}

const Bg = styled.div`
  background-image: url("/bg.jpg");
  background-size: cover;
`

export default Login

```
