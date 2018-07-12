import React, { Component } from "react"
// import PropTypes from "prop-types"
import { apiStore, uiStore } from "./stores"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper from "./components/StepIndicator"
import StepContent from "./components/StepContent"
import { Provider } from "mobx-react"
import { StyledWrapper } from "./App"

class SavingsAdvisor extends Component {
  render() {
    return (
      <Provider apiStore={apiStore} uiStore={uiStore}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <StyledWrapper>
              <Stepper />
              <StepContent />
            </StyledWrapper>
          </Router>
        </div>
      </Provider>
    )
  }
}

SavingsAdvisor.propTypes = {}

export { SavingsAdvisor }
