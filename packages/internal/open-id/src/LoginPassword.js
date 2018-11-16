import React from "react"
import { challengeIdentity, signInRedirectCallback } from "./utils"
import axios from "axios"
import qs from "qs"

class LoginPassword extends React.Component {
  constructor(props) {
    super(props)

    const searchParams = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    })

    const hashParams = qs.parse(window.location.hash, {
      ignoreQueryPrefix: true
    })

    if (hashParams["#id_token"]) {
      signInRedirectCallback()
        .then(user => {
          console.log(user)
          window.location.replace(props.redirectAfterLogin)
        })
        .catch(console.error)
    } else if (!searchParams.state) {
      const oidcConfig = {
        ...props.oidcConfig,
        acr_values: `idp:${props.acrValue}`
      }

      challengeIdentity(oidcConfig)
    }

    this.state = {
      username: "",
      password: "",
      stateToken: searchParams.state,
      loginStatus: null,
      isLoggingIn: false
    }

    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.submitCredentials = this.submitCredentials.bind(this)
  }

  handlePasswordInput(e) {
    const password = e.target.value
    this.setState({ password, loginStatus: null })
  }

  handleUsernameInput(e) {
    const username = e.target.value
    this.setState({ username, loginStatus: null })
  }

  submitCredentials(user, pass) {
    const { username = user, password = pass } = this.state
    const state = this.state.stateToken
    const authority = this.props.oidcConfig.authority
    const postData = {
      username,
      password,
      state
    }

    this.setState({ isLoggingIn: true })
    axios
      .post(this.props.codePostUri, postData)
      .then(response => {
        console.log(response)
        window.location.replace(
          `${authority}${this.props.callbackPath}?${qs.stringify({
            state
          })}`
        )
      })
      .catch(err =>
        this.setState({
          loginStatus: err,
          isLoggingIn: false,
          username: "",
          password: ""
        })
      )
  }

  render() {
    return this.props.children({
      handleUsernameInput: this.handleUsernameInput,
      handlePasswordInput: this.handlePasswordInput,
      submitCredentials: this.submitCredentials,
      loginStatus: this.state.loginStatus,
      isLoading: this.state.isLoggingIn,
      username: this.state.username,
      password: this.state.password
    })
  }
}

export default LoginPassword
