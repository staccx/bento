import React, { Component } from "react"
import PropTypes from "prop-types"
import { Provider } from "./context"
import Api from "./services/api"
import Auth from "./services/auth"

class OpenIdProvider extends Component {
  constructor(props, context) {
    super(props, context)

    if (props.authService) {
      this.authService = props.authService
    } else {
      this.authService = new Auth(props.oidcConfig, props.debug)
    }
    this.apiService = new Api(props.apiRoot, this.authService)
    this.state = { user: null, api: {}, iFrameUrl: null }
    this.shouldCancel = false
    this.callApi = this.callApi.bind(this)
    this.getUser = this.getUser.bind(this)
    this.createSigninRequest = this.createSigninRequest.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.renewToken = this.renewToken.bind(this)

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
        this.shouldCancel = user.expired
        if (user.expired) {
          this.renewToken()
        }
      } else {
        console.warn("You are not logged in.")
      }

      if (!this.shouldCancel) {
        this.setState({ user })
        if (this.props.onUserFetched) {
          this.props.onUserFetched(user)
        }
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
          logout: this.logout,
          userManager: this.authService.userManager
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

OpenIdProvider.propTypes = {
  apiRoot: PropTypes.string,
  children: PropTypes.any,
  oidcConfig: PropTypes.any,
  onUserFetched: PropTypes.func
}

export default OpenIdProvider

OpenIdProvider.defaultProps = {
  apiRoot: "/",
  debug: false
}
