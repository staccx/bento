/**
 * @class Slider2
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Slider, Rail, Handles, Tracks } from "react-compound-slider"
import { applyVariants, spacing, color } from "../../../../theming"
import Handle from "./Slider2.Handle"
import Track from "./Slider2.Track"
import themeProps from "./Slider2.themeProps"

class Slider2 extends React.Component {
  state = {
    values: [this.props.defaultValue],
    update: [this.props.defaultValue]
  }

  onUpdate = update => {
    this.setState({ update })
    this.props.onUpdate && this.props.onUpdate(update[0])
  }

  onChange = values => {
    this.setState({ values })
    this.props.onChange && this.props.onChange(values[0])
  }

  onStart = values => {
    this.setState({ values })
    this.props.onSlideStart && this.props.onSlideStart(values[0])
  }

  static getDerivedStateFromProps(props, state) {
    // Need this to dynamically update state from props
    if (props.defaultValue !== state.values[0]) {
      return {
        values: [props.defaultValue]
      }
    }
    // Return null if the state hasn't changed
    return null
  }

  render() {
    const { values } = this.state
    const {
      variant,
      min,
      max,
      step,
      onFocus,
      onKeyDown,
      onBlur,
      ...restProps
    } = this.props
    return (
      <Container>
        <StyledSlider
          mode={1}
          step={step}
          domain={[min, max]}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          onSlideStart={this.onSlideStart}
          values={values}
          variant={variant}
          {...restProps}
        >
          <Rail>
            {({ getRailProps }) => <StyledRail {...getRailProps()} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle, index) => {
                  const {
                    onKeyDown: handleKeyDown,
                    ...restHandleProps
                  } = getHandleProps(handle.id)
                  return (
                    <StyledHandle
                      key={handle.id}
                      handle={handle}
                      domain={[this.props.min, this.props.max]}
                      getHandleProps={getHandleProps}
                      variant={variant}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      {...restHandleProps}
                      tabIndex={index}
                      onKeyDown={e => {
                        if (onKeyDown) {
                          onKeyDown(e.keyCode)
                        }
                        handleKeyDown(e)
                      }}
                    />
                  )
                })}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <StyledTracks variant={variant}>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                    variant={variant}
                  />
                ))}
              </StyledTracks>
            )}
          </Tracks>
        </StyledSlider>
      </Container>
    )
  }
}

const Container = styled.div`
  height: ${spacing.medium};
  padding-top: ${spacing.tiny};
  width: 100%;
  ${applyVariants(themeProps.container)};
`

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  ${applyVariants(themeProps.slider)};
`

const StyledRail = styled.div`
  position: absolute;
  width: 100%;
  height: 14px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${color.gray};
  ${applyVariants(themeProps.rail)};
`

const StyledHandle = styled(Handle)`
  ${applyVariants(themeProps.handle)};
`

const StyledTracks = styled.div`
  ${applyVariants(themeProps.tracks)};
`

Slider2.defaultProps = {
  className: "",
  min: 0,
  max: 100,
  step: 10,
  defaultValue: 0
}

Slider2.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}
Slider2.themeProps = themeProps

/** @component */
export default Slider2
