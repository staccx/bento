import React from "react"
import { LoginPassword } from "@staccx/login-oidc"
import { Button, Box, Layout, Input } from "@staccx/base"

const Login = () => {
  const config = {
    oidcConfig: {
      authority: "https://oidc.test.fundu.no",
      client_id: "docs",
      redirect_uri: window.location.origin + "/callback",
      response_type: "id_token token"
    },
    acrValue: "username-password-provider",
    codePostUri: "/api/username-password/login",
    redirectAfterLogin: "/",
    callbackPath: "/username-password-callback"
  }

  if (window.location.host !== "localhost") {
    const hostParts = window.location.host.split(".")
    hostParts.splice(0, 1, "oidc")
    config.oidcConfig.authority = `https://${hostParts.join(".")}`
  }

  return (
    <LoginPassword config={config}>
      {({
        handleUsernameInput,
        handlePasswordInput,
        submitCredentials,
        loginStatus,
        username,
        password
      }) => {
        if (loginStatus !== null) {
          window.alert("Login failed")
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
