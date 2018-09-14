import React, { Component } from "react"
import { Provider } from "./context"
import Api from "./services/api"
import Auth from "./services/auth"

class OIDCProvider extends Component {
  constructor(props, context) {
    super(props, context)

    this.authService = new Auth(props.oidcConfig)
    this.apiService = new Api(props.apiRoot)
    this.state = { user: null, api: {}, iFrameUrl: null }
    this.shouldCancel = false
    this.callApi = this.callApi.bind(this)
    this.getUser = this.getUser.bind(this)
    this.createSigninRequest = this.createSigninRequest.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

    console.log("OIDCProvider constructed", props)
  }

  componentDidMount() {
    this.getUser()
    this.createSigninRequest()
  }

  login() {
    this.authService.login()
  }

  callApi() {
    this.apiService
      .callApi()
      .then(data => {
        this.setState({ api: data.data })
        console.log(
          "Api return successfully data, check in section - Api response",
          data
        )
      })
      .catch(console.error)
  }

  componentWillUnmount() {
    this.shouldCancel = true
  }

  renewToken() {
    this.authService
      .renewToken()
      .then(user => {
        console.log("Token has been sucessfully renewed. :-)", user)
        this.getUser()
      })
      .catch(console.error)
  }

  logout() {
    this.authService.logout()
  }

  getUser() {
    console.log("getting user")
    this.authService.getUser().then(user => {
      if (user) {
        console.log("User has been successfully loaded from store.", user)
      } else {
        console.warn("You are not logged in.")
      }

      if (!this.shouldCancel) {
        this.setState({ user })
      }
    })
  }

  async createSigninRequest() {
    const request = await this.authService.createSigninRequest()
    const { url } = request
    this.setState({ iFrameUrl: url })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          renewToken: this.renewToken,
          call: this.callApi,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

OIDCProvider.propTypes = {}

export default OIDCProvider
