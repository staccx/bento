/**
 * @class Slider2
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Slider, Rail, Handles, Tracks } from "react-compound-slider"
import { applyVariants, spacing, color } from "../../../../theming"
import { themePropTypes } from "../../../../constants/themeContants"
import Handle from "./Slider2.Handle"
import Track from "./Slider2.Track"

class Slider2 extends React.Component {
  state = {
    values: [this.props.defaultValue],
    update: [this.props.defaultValue]
  }

  onUpdate = update => {
    this.setState({ update })
  }

  onChange = values => {
    this.setState({ values })
  }

  render() {
    const { values } = this.state
    const { variant } = this.props
    return (
      <Container>
        <StyledSlider
          mode={1}
          step={this.props.step}
          domain={[this.props.min, this.props.max]}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
          variant={variant}
        >
          <Rail>
            {({ getRailProps }) => <StyledRail {...getRailProps()} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={[this.props.min, this.props.max]}
                    getHandleProps={getHandleProps}
                    variant={variant}
                  />
                ))}
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

Slider2.themeProps = {
  container: {
    name: "SLIDER2_CONTAINER",
    description: "Container style",
    type: themePropTypes.style
  },
  slider: {
    name: "SLIDER2_SLIDER",
    description: "Slider outer style",
    type: themePropTypes.style
  },
  rail: {
    name: "SLIDER2_RAIL",
    description: "Rail style",
    type: themePropTypes.style
  },
  tracks: {
    name: "SLIDER2_TRACKS",
    description: "Tracks style",
    type: themePropTypes.style
  }
}

const Container = styled.div`
  height: ${spacing.medium};
  padding-top: ${spacing.tiny};
  width: 100%;
  ${applyVariants(Slider2.themeProps.container)};
`

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  ${applyVariants(Slider2.themeProps.slider)};
`

const StyledRail = styled.div`
  position: absolute;
  width: 100%;
  height: 14px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${color.gray};
  ${applyVariants(Slider2.themeProps.rail)};
`

const StyledTracks = styled.div`
  ${applyVariants(Slider2.themeProps.tracks)};
`

Slider2.defaultProps = {
  className: "",
  min: 0,
  max: 100,
  step: 10,
  defaultValue: 0,
  hideValueViewer: false
}

Slider2.propTypes = {
  className: PropTypes.string,
  hideValueViewer: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number
}

/** @component */
export default Slider2
