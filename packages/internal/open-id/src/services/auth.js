import { Log, UserManager } from "oidc-client"

export default class Auth {
  constructor(config) {
    this.userManager = new UserManager(config)

    Log.logger = console
    Log.level = Log.INFO
  }

  getUser() {
    return this.userManager.getUser()
  }

  login() {
    return this.userManager.signinRedirect()
  }

  renewToken() {
    return this.userManager.signinSilent()
  }

  logout() {
    return this.userManager.signoutRedirect()
  }

  createSigninRequest() {
    return this.userManager.createSigninRequest()
  }
}
