import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { SlideInFromRight, SlideInFromLeft } from "@staccx/animations"
import styled from "styled-components"
import { Transition, TransitionGroup } from "react-transition-group"
import StepperNavigation from "./StepNavigation"
import Footer from "./Footer"

const duration = 500

const Wrapper = styled.div`
  position: relative;
`

const Enter = styled.div`
  animation: ${SlideInFromRight} ease-in-out ${duration}ms
    ${p => (p.direction === 1 ? "normal" : "reverse")} forwards 1;
  position: absolute;
  width: 100%;
`

const Exit = styled.div`
  animation: ${SlideInFromLeft} ease-in-out ${duration}ms
    ${p => (p.direction !== 1 ? "normal" : "reverse")} forwards 1;
  position: absolute;
  width: 100%;
`

const transitionStyles = direction =>
  direction === 1
    ? {
        entering: null,
        entered: Enter,
        exiting: Exit,
        exited: null
      }
    : {
        entering: null,
        entered: Exit,
        exiting: Enter,
        exited: null
      }

const Slide = ({ children, isIn: inProp, direction = 1 }) => (
  <Transition in={inProp} timeout={duration}>
    {state => {
      const Animation = transitionStyles(direction)[state]
      if (!Animation) {
        return null
      }
      return <Animation direction={direction}>{children}</Animation>
    }}
  </Transition>
)

@inject("uiStore")
@observer
class StepContent extends Component {
  componentWillMount() {
    this.last = this.props.uiStore.currentStep
  }

  render() {
    const { currentStep, steps } = this.props.uiStore
    const direction = this.last > currentStep ? -1 : 1
    this.last = currentStep
    return (
      <TransitionGroup component={Wrapper}>
        {steps.map((item, index) => {
          const Comp = item.component
          const isIn = index === currentStep
          return (
            <Slide isIn={isIn} key={item.name} direction={direction}>
              <Comp />
              <StepperNavigation />
              <Footer>
                Made by <a href="http://stacc.com">Stacc X</a> <br />
                Powered by <a href="http://quantfol.io">Quantfolio</a>
              </Footer>
            </Slide>
          )
        })}
      </TransitionGroup>
    )
  }
}

export default StepContent
