import { Log, UserManager } from "oidc-client"

class Auth {
  constructor(config, debug = false) {
    console.log("creating a new usermanager")
    this.userManager = new UserManager(config)

    Log.logger = console
    Log.level = debug ? Log.DEBUG : Log.INFO
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

  renewTokenCallback() {
    return this.userManager.signinSilentCallback()
  }

  logout() {
    return this.userManager.signoutRedirect()
  }

  createSigninRequest() {
    return this.userManager.createSigninRequest()
  }
}

export default Auth
