import React, {Component} from 'react';
import {inject, observer} from 'mobx-react'

@inject('uiStore') @observer
class StepContent extends Component {
  render() {
    const {steps, currentStep} = this.props.uiStore
    const current = steps[currentStep]
    if (!current) {
      return null
    }
    const Comp = current.component
    return (
      <div>
        <Comp/>
      </div>
    );
  }
}

export default StepContent;
