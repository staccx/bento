import oidc from "oidc-client"

export const challengeIdentity = oidcConfig => {
  return new oidc.UserManager(oidcConfig).signinRedirect().catch(console.error)
}

export const signInRedirectCallback = oidcConfig => {
  return new oidc.UserManager(oidcConfig).signinRedirectCallback()
}

export const signInSilentCallback = oidcConfig =>
  new oidc.UserManager(oidcConfig).signinSilentCallback()
