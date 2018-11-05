import axios from "axios"

export default class Api {
  constructor(apiRoot, authService) {
    this.authService = authService
    this.apiRoot = apiRoot
  }

  callApi() {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._callApi(user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._callApi(renewedUser.access_token)
            })
          }
          throw error
        })
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._callApi(renewedUser.access_token)
        })
      } else {
        throw new Error("user is not logged in")
      }
    })
  }

  _callApi(token) {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token
    }

    return axios.get(this.apiRoot + "test", { headers })
  }
}
