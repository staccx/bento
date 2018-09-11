import React, { Component } from "react"
import PropTypes from "prop-types"
import { Loading } from "@staccx/base"
import SanityClient from "@sanity/client"
import { Clients, Home, Page, Team } from "./_codeSplitting"

const client = SanityClient({
  projectId: "8j24leyc",
  dataset: "production",
  useCdn: false,
  withCredentials: true
})

const query = `
*[_id == $id][0]
`

class PreviewLive extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      result: [],
      params: {
        id: props.id
      }
    }

    this.preview = this.preview.bind(this)
    this.initialLoad = this.initialLoad.bind(this)
  }

  // Sets up a listener and updates states on changes
  preview = () => {
    this.subscription = client
      .listen(query, this.state.params)
      .subscribe(({ result }) => {
        this.setState({ result })
      })
  }

  initialLoad = async () => {
    const result = await client.fetch(query, this.state.params)
    this.setState({ result, loaded: true })
  }

  componentDidMount = async () => {
    // Only run once
    if (!this.state.loaded) {
      await this.initialLoad() // TODO: Correct?
      this.preview()
    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  componentDidCatch(error) {
    console.log("whoops", error)
  }

  render() {
    if (!this.state.result) {
      return <Loading />
    }

    return (
      <Page
        page={this.state.result}
        blockCredentials={{
          projectId: "8j24leyc",
          dataset: "production"
        }}
      />
    )
  }
}

PreviewLive.propTypes = {
  id: PropTypes.string.isRequired
}

export default PreviewLive
