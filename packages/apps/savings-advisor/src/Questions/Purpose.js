import React from "react"
import { inject, observer } from "mobx-react"
import Question from "../components/Question"

@inject("apiStore", "uiStore")
@observer
class Purpose extends React.Component {
  render() {
    const { horizon, setHorizon } = this.props.apiStore
    const { translate, cmsPurpose } = this.props.uiStore
    return (
      <Question
        selected={horizon}
        translate={translate}
        content={cmsPurpose}
        onChange={setHorizon}
      />
    )
  }
}

export default Purpose
