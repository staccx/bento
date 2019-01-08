import React, { Component } from "react"
import PropTypes from "prop-types"
import isEqual from "lodash.isequal"
import { Provider } from "./context"
import Api from "./services/api"
import Auth from "./services/auth"

class OpenIdProvider extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: null,
      api: {},
      iFrameUrl: null
    }
    this.shouldCancel = false
    this.callApi = this.callApi.bind(this)
    this.getUser = this.getUser.bind(this)
    this.createSigninRequest = this.createSigninRequest.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.renewToken = this.renewToken.bind(this)
    this.initialize = this.initialize.bind(this)
    this.setUser = this.setUser.bind(this)
    this.initialize()
  }

  componentDidMount() {
    this.getUser()
    this.createSigninRequest()
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.oidcConfig, prevProps.oidcConfig)) {
      console.log("Not the same", this.props.oidcConfig, prevProps.oidcConfig)
      this.initialize()
      this.createSigninRequest()
    }
  }

  initialize() {
    if (this.props.authService) {
      this.authService = this.props.authService
    } else {
      this.authService = new Auth(this.props.oidcConfig, this.props.debug)
    }
    this.apiService = new Api(this.props.apiRoot, this.authService)
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
    console.log("getting user auto")
    this.authService.getUser().then(this.setUser)
  }

  setUser(user) {
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
          userManager: this.authService.userManager,
          setUser: this.setUser
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
