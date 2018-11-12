import React from "react"
import { LoginPassword, Auth } from "@staccx/open-id"
import { Button, Box, Layout, Input } from "@staccx/base"

const oidcConfig = {
  authority: "https://oidc.test.fundu.no",
  client_id: "docs",
  redirect_uri: window.location.origin + "/callback",
  response_type: "id_token token",
  scope: "openid profile",
  silent_redirect_uri: window.location.origin + "/callback-silent",
  automaticSilentRenew: true
}

const config = {
  acrValue: "username-password-provider",
  codePostUri: "/api/username-password/login",
  redirectAfterLogin: "/",
  callbackPath: "/callback/username-password-provider"
}

const baseConfig = {
  oidcConfig,
  redirectAfterLogin: "/"
}

export const authService = new Auth(oidcConfig, true)

const Login = () => {
  if (window.location.hostname !== "localhost") {
    const hostParts = window.location.host.split(".")
    hostParts.splice(0, 1, "oidc")
    oidcConfig.authority = `https://${hostParts.join(".")}`
  }

  return (
    <LoginPassword {...baseConfig} {...config}>
      {({
        handleUsernameInput,
        handlePasswordInput,
        submitCredentials,
        loginStatus,
        username,
        password
      }) => {
        if (loginStatus !== null) {
          return <div>{loginStatus.message}</div>
        }

        return (
          <Layout grid="centered">
            <Box variant="login">
              <Layout>
                Username{" "}
                <Input
                  id="username"
                  value={username}
                  onChange={handleUsernameInput}
                />
                Password{" "}
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordInput}
                />
                <Button variant="primary" onClick={submitCredentials}>
                  Log in
                </Button>
              </Layout>
            </Box>
          </Layout>
        )
      }}
    </LoginPassword>
  )
}

export default Login
