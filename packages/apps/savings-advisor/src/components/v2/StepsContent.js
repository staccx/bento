import React, { is } from "react"
import PropTypes from "prop-types"
import { SlideInFromRight, SlideInFromLeft } from "@staccx/animations"
import styled from "styled-components"
import { Transition, TransitionGroup } from "react-transition-group"

const duration = 500

const Wrapper = styled.div`
  position: relative;
  min-height: 80vh;
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

const StepsContent = ({
  currentStep,
  steps,
  direction,
  setState,
  values,
  ...props
}) => {
  return (
    <TransitionGroup component={Wrapper}>
      {steps.map((item, index) => {
        const isIn = index === currentStep

        const render = () => {
          if (React.isValidElement(<item.component />)) {
            return (
              <item.component
                data={item.data}
                setState={setState}
                {...props}
                {...values}
                steps={steps}
              />
            )
          }

          return item.component({
            data: item.data,
            setState,
            props,
            values
          })
        }

        return (
          <Slide isIn={isIn} key={item.name} direction={direction}>
            {render()}
          </Slide>
        )
      })}
    </TransitionGroup>
  )
}

StepsContent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.array,
  direction: PropTypes.number
}

export default StepsContent
