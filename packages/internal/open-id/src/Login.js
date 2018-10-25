import React from "react"
import axios from "axios"
import PropTypes from "prop-types"
import qs from "qs"
import { challengeIdentity, signInRedirectCallback } from "./utils"

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
      signInRedirectCallback()
        .then(user => {
          console.log(user)
          window.location.replace(props.redirectAfterLogin)
        })
        .catch(function(e) {
          console.error(e)
        })
    } else if (searchParams.state && searchParams.nonce) {
      stage = stages.waitingForValidation
      this.submitDataFromMagicLink(searchParams.state, searchParams.nonce)
    } else if (searchParams.state) {
      stage = stages.waitingForId
    } else {
      stage = stages.waitingForState
      challengeIdentity({
        ...props.oidcConfig,
        acr_values: `idp:${props.acrValue}`
      })
    }

    this.state = {
      id: null,
      code: null,
      error: null,
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
      .post(this.props.codePostUri, { state, nonce })
      .then(res => res.status === 200)
      .catch(console.error)
  }

  submitCode(e) {
    e && e.preventDefault()
    const state = this.state.stateToken
    const nonce = this.state.code

    this.setState({
      stage: stages.submittingCode
    })

    console.log("submitting", state, nonce)
    return axios
      .post(this.props.codePostUri, { state, nonce })
      .then(res => {
        if (res.status === 200) {
          console.log("200 ok!")
          window.location.replace(
            this.props.oidcConfig.authority +
              this.props.callbackPath +
              "?" +
              qs.stringify({ state })
          )
        } else {
          this.setState({
            stage: stages.failedToSubmitCode
          })
        }
      })
      .catch(error => {
        switch (error.response.status) {
          case 400: {
            this.setState({ stage: stages.waitingForCode, error: 400 })
            break
          }
          case 429: {
            this.setState({ stage: stages.tooManyAttempts, error: 429 })
            break
          }
          default: {
            // Start over?
            this.setState({
              stage: stages.failedToSubmitCode,
              error: error.response.status
            })
            break
          }
        }
      })
  }

  submitId(e) {
    e && e.preventDefault()
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

    console.log(postData)
    this.setState({
      stage: stages.submittingId
    })

    return axios
      .post(this.props.idPostUri, postData)
      .then(res => {
        this.setState({
          stage:
            res.status === 200 ? stages.waitingForCode : stages.failedToSubmitId
        })

        if (res.status === 200 && this.props.magicPollUri) {
          const timer = setInterval(() => {
            axios.post(this.props.magicPollUri, { state }).then(res => {
              if (res.status === 200) {
                clearInterval(timer)
                // TODO: Unnessesary
                window.location.replace(
                  this.props.oidcConfig.authority +
                    this.props.callbackPath +
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
      .catch(error => {
        this.setState({ stage: stages.waitingForId }, () => {
          challengeIdentity({
            ...this.props.oidcConfig,
            acr_values: `idp:${this.props.acrValue}`
          })
        })

        console.log(error.response.status)
      })
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
      error: this.state.error,
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
  waitingForValidation: "WAITING_FOR_VALIDATION",
  tooManyAttempts: "TOO_MANY_ATTEMPTS"
}

export default Login

Login.propTypes = {
  acrValue: PropTypes.string.isRequired,
  callbackPath: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  codePostUri: PropTypes.string.isRequired,
  idPostUri: PropTypes.string.isRequired,
  magicPollUri: PropTypes.string.isRequired,
  oidcConfig: PropTypes.any.isRequired,
  redirectAfterLogin: PropTypes.string.isRequired
}
