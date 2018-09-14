import React from "react"
import { challengeIdentity } from "./utils"
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
      window.sessionStorage.setItem("stacc_id_token", hashParams["#id_token"])
      window.sessionStorage.setItem(
        "stacc_access_token",
        hashParams["access_token"]
      )
      window.location.replace(props.config.redirectAfterLogin)
    }

    if (!searchParams.state) {
      const oidcConfig = {
        ...props.config.oidcConfig,
        acr_values: `idp:${props.config.acrValue}`
      }

      challengeIdentity(oidcConfig)
    }

    this.state = {
      username: "",
      password: "",
      stateToken: searchParams.state,
      loginStatus: null
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

  submitCredentials() {
    const { username, password } = this.state
    const state = this.state.stateToken
    const authority = this.props.config.oidcConfig.authority
    const postData = {
      username,
      password,
      state
    }
    axios
      .post(this.props.config.codePostUri, postData)
      .then(response => {
        console.log(response)
        window.location.replace(
          `${authority}${this.props.config.callbackPath}?${qs.stringify({
            state
          })}`
        )
      })
      .catch(err =>
        this.setState({
          loginStatus: err,
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
      username: this.state.username,
      password: this.state.password
    })
  }
}

export default LoginPassword
