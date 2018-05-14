import React from "react"
import styled from "styled-components"
import Loading from "../../components/Loading"
import withTasks from "../../hoc/withTasks"
import withApp from "../../hoc/withApp"
import withLoanApplication from "../../hoc/withLoanApplication"
import { CALLBACK_URL_KEY } from "../../state/openId"
import localforage from "localforage"
import withOpenId from "../../hoc/withOpenId"
import { ContentBlock } from "./Manual"

class Authenticate extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      iFrameUrl: null
    }
  }

  componentWillMount() {
    this.timeout = setTimeout(() => {
      if (!this.props.user) {
        this.props.getIFrameUrl().then(state => {
          this.setState({ iFrameUrl: state.url })
        })
      } else {
        this.props
          .retrieveApplication()
          .then(() => {
            localforage.getItem(CALLBACK_URL_KEY).then(this.props.navigate)
            this.props.sendLoanApplication()
          })
          .catch(() => {
            localforage.getItem(CALLBACK_URL_KEY).then(this.props.navigate)
          })
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { user } = this.props

    if (!user) {
      const { iFrameUrl } = this.state

      if (!iFrameUrl) {
        return null
      }
      // the html attributes to create the iframe with
      // make sure you use camelCase attribute names
      const attributes = {
        src: iFrameUrl,
        width: "100%",
        height: "306px"
      }

      return (
        <React.Fragment>
          {/* TODO: her må vi ha inn annen tekst om du klikker på logg inn */}
          <ContentBlock blockRef={"8efc0042-5f2d-40fb-afce-ef3559c021da"} />
          <Iframe {...attributes} />
        </React.Fragment>
      )
    }
    return <Loading message={"LOADING"} />
  }
}

const Iframe = styled.iframe`
  margin: auto;
  max-width: 420px;
  border-width: 0;
  display: block;
`

export default withOpenId(withLoanApplication(withApp(withTasks(Authenticate))))
