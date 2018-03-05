import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react'
import {Button} from "@staccx/base";

@inject('uiStore') @observer
class StepNavigation extends Component {
  static propTypes = {
    uiStore: PropTypes.object
  }

  render() {
    const {maxStep, currentStep, steps, setStep} = this.props.uiStore
    const previous = currentStep > 0 ? steps[currentStep - 1] : null
    const next = currentStep < steps.length - 1 ? steps[currentStep + 1] : null
    return (
      <div>
        {previous && <Button onClick={() => setStep(currentStep - 1)}>{previous.name}</Button>}
        {next && <Button onClick={() => setStep(currentStep +1)}>{next.name}</Button>}
      </div>
    );
  }
}

export default StepNavigation;
