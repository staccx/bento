import oidc from "oidc-client"

export const challengeIdentity = oidcConfig => {
  new oidc.UserManager(oidcConfig).signinRedirect().catch(console.error)
}
