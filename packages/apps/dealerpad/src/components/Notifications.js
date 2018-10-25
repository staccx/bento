import React, { Component } from "react"
import Notification from "react-web-notification"

class Notifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ignore: true,
      title: ""
    }

    this.handleNotSupported = this.handleNotSupported.bind(this)
    this.handleNotificationOnClick = this.handleNotificationOnClick.bind(this)
    this.handleNotificationOnClose = this.handleNotificationOnClose.bind(this)
    this.handleNotificationOnError = this.handleNotificationOnError.bind(this)
    this.handleNotificationOnShow = this.handleNotificationOnShow.bind(this)
    this.handlePermissionDenied = this.handlePermissionDenied.bind(this)
    this.handlePermissionGranted = this.handlePermissionGranted.bind(this)
  }

  handlePermissionGranted() {
    console.log("Permission Granted")
    const now = Date.now()

    const title = "Dealerpad"
    const body = "Welcome, friend"
    const tag = now
    const icon = "/android-chrome-192x192.png"
    // const icon = 'http://localhost:3000/Notifications_button_24.png';

    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: "en",
      dir: "ltr",
      sound: "./sound.mp3" // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    }
    this.setState({
      ignore: false,
      title,
      options
    })
  }

  handlePermissionDenied() {
    console.log("Permission Denied")
    this.setState({
      ignore: true
    })
  }

  handleNotSupported() {
    console.log("Web Notification not Supported")
    this.setState({
      ignore: true
    })
  }

  handleNotificationOnClick(e, tag) {
    console.log(e, "Notification clicked tag:" + tag)
  }

  handleNotificationOnError(e, tag) {
    console.log(e, "Notification error tag:" + tag)
  }

  handleNotificationOnClose(e, tag) {
    console.log(e, "Notification closed tag:" + tag)
  }

  handleNotificationOnShow(e, tag) {
    this.playSound()
    console.log(e, "Notification shown tag:" + tag)
  }

  playSound(filename) {
    document.getElementById("sound").play()
  }

  render() {
    return (
      <div>
        <Notification
          ignore={this.state.ignore && this.state.title !== ""}
          notSupported={this.handleNotSupported}
          onPermissionGranted={this.handlePermissionGranted}
          onPermissionDenied={this.handlePermissionDenied}
          onShow={this.handleNotificationOnShow}
          onClick={this.handleNotificationOnClick}
          onClose={this.handleNotificationOnClose}
          onError={this.handleNotificationOnError}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
        <audio id="sound" preload="auto">
          <source src="./sound.mp3" type="audio/mpeg" />
          <source src="./sound.ogg" type="audio/ogg" />
          <embed hidden autostart="false" loop={false} src="./sound.mp3" />
        </audio>
      </div>
    )
  }
}

Notifications.propTypes = {}

export default Notifications
