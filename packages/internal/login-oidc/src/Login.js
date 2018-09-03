import React from "react"
import oidc from "oidc-client"
import axios from "axios"
import qs from "qs"

class Login extends React.Component {
  constructor(props) {
    super(props)

    const searchParams = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    })

    const hashParams = qs.parse(window.location.hash, {
      ignoreQueryPrefix: true
    })

    let stage
    if (hashParams["#id_token"]) {
      window.sessionStorage.setItem("stacc_id_token", hashParams["#id_token"])
      window.location.replace(props.config.redirectAfterLogin)
    } else if (searchParams.state && searchParams.nonce) {
      stage = stages.waitingForValidation
      this.submitDataFromMagicLink(searchParams.state, searchParams.nonce)
    } else if (searchParams.state) {
      stage = stages.waitingForId
    } else {
      stage = stages.waitingForState
      this.challengeIdentity()
    }

    this.state = {
      id: null,
      code: null,
      stateToken: searchParams.state,
      stage: stage
    }

    this.handleCodeInput = this.handleCodeInput.bind(this)
    this.handleIdInput = this.handleIdInput.bind(this)
    this.submitCode = this.submitCode.bind(this)
    this.submitId = this.submitId.bind(this)
  }

  submitDataFromMagicLink(state, nonce) {
    return axios
      .post(this.props.config.codePostUri, { state, nonce })
      .then(res => res.status === 200)
      .catch(console.error)
  }

  challengeIdentity() {
    const config = {
      ...this.props.config.oidcConfig,
      acr_values: `idp:${this.props.config.acrValue}`
    }

    new oidc.UserManager(config).signinRedirect().catch(console.error)
  }

  submitCode() {
    const state = this.state.stateToken
    const nonce = this.state.code

    this.setState({
      stage: stages.submittingCode
    })

    return axios
      .post(this.props.config.codePostUri, { state, nonce })
      .then(res => {
        if (res.status === 200) {
          console.log(
            "redirecting to ",
            this.props.config.oidcConfig.authority +
              this.props.config.callbackPath +
              "?" +
              qs.stringify({ state })
          )
          window.location.replace(
            this.props.config.oidcConfig.authority +
              this.props.config.callbackPath +
              "?" +
              qs.stringify({ state })
          )
        } else {
          this.setState({
            stage: stages.failedToSubmitCode
          })
        }
      })
      .catch(console.error)
  }

  submitId() {
    const id = this.state.id
    const state = this.state.stateToken

    const postData = /^\d+$/.test(id)
      ? {
          phonenumber: "47" + id,
          state
        }
      : {
          email: id,
          state
        }

    this.setState({
      stage: stages.submittingId
    })

    return axios
      .post(this.props.config.idPostUri, postData)
      .then(res => {
        this.setState({
          stage:
            res.status === 200 ? stages.waitingForCode : stages.failedToSubmitId
        })

        if (res.status === 200 && this.props.config.magicPollUri) {
          const timer = setInterval(() => {
            axios.post(this.props.config.magicPollUri, { state }).then(res => {
              if (res.status === 200) {
                clearInterval(timer)
                window.location.replace(
                  this.props.config.oidcConfig.authority +
                    this.props.config.callbackPath +
                    "?" +
                    qs.stringify({ state: this.state.stateToken })
                )
              } else if (res.status !== 204) {
                clearInterval(timer)
              }
            })
          }, 3000)
        }
      })
      .catch(console.error)
  }

  handleCodeInput(e) {
    const code = e.target.value.replace(/ /g, "").toUpperCase()
    this.setState({ code })
  }

  handleIdInput(e) {
    const id = e.target.value.replace(/ /g, "")
    this.setState({ id })
  }

  render() {
    return this.props.children({
      stage: this.state.stage,
      handleIdInput: this.handleIdInput,
      handleCodeInput: this.handleCodeInput,
      submitId: this.submitId,
      submitCode: this.submitCode
    })
  }
}

export const stages = {
  waitingForState: "WAITING_FOR_STATE",
  waitingForId: "WAITING_FOR_ID",
  submittingId: "SUBMITTING_ID",
  submittingCode: "SUBMITTING_CODE",
  failedToSubmitId: "FAILED_TO_SUBMIT_ID",
  failedToSubmitCode: "FAILED_TO_SUBMIT_CODE",
  waitingForCode: "WAITING_FOR_CODE",
  waitingForValidation: "WAITING_FOR_VALIDATION"
}

export default Login
