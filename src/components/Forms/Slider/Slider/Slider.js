/**
 * @class Slider
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Handles,
  Rail,
  Slider as CompoundSlider,
  Tracks
} from "react-compound-slider"
import throttle from "lodash.throttle"
import { applyVariants, color, spacing } from "../../../../theming"
import Handle from "./Slider.Handle"
import Track from "./Slider.Track"
import themeProps from "./Slider.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

/**
 * Slider component which can be defined by various properties, i.e. min, max, step
 */
const Slider = ({
  variant,
  min = 0,
  max = 100,
  step = 10,
  throttleMs = 100,
  onFocus,
  onKeyDown,
  onBlur,
  onChange,
  onSlideStart,
  onSlideEnd,
  defaultValue = 0,
  value,
  ...restProps
}) => {
  const [values, setValues] = useState([value || defaultValue])
  /* Since CompoundSlider triggers onUpdate on initialRender (twice!) we ignore the
   first updates as they will overwrite our defaultValue with a step normalized value
 */
  const [ignore, ignoreSet] = React.useState(2)

  const handleUpdate = value => {
    setValues(value)
    onChange && onChange(value[0])
  }

  const updateThrottled = React.useRef(throttle(handleUpdate, throttleMs))

  const onUpdate = args => {
    if (ignore > 0) {
      ignoreSet(ignore - 1)
      return
    }

    return updateThrottled.current(args)
  }

  const handleEnd = value => {
    setValues(value)
    onSlideEnd && onSlideEnd(value[0])
  }

  const handleStart = value => {
    setValues(value)
    onSlideStart && onSlideStart(value[0])
  }

  useEffect(() => {
    setValues([value])
  }, [value])

  return (
    <Container>
      <StyledSlider
        mode={1}
        step={step}
        domain={[min, max]}
        onUpdate={onUpdate}
        onSlideEnd={handleEnd}
        onSlideStart={handleStart}
        values={values}
        variant={variant}
        {...restProps}
      >
        <Rail>
          {({ getRailProps }) => (
            <StyledRail variant={variant} {...getRailProps()} />
          )}
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
                    domain={[min, max]}
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

const Container = styled.div`
  height: ${spacing.medium};
  padding-top: ${spacing.tiny};
  width: 100%;
  ${applyVariants(themeProps.container)};
`

const StyledSlider = styled(CompoundSlider)`
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

export const SliderProps = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  /**
   * Event when slider starts dragging.
   */
  onSlideStart: PropTypes.func,
  /**
   * Event when slider ends dragging.
   */
  onSlideEnd: PropTypes.func,
  /**
   * Event called every time the slider
   */
  onChange: PropTypes.func,
  /**
   * How often do we allow the change function to be called
   */
  throttleMs: PropTypes.number,
  onKeyDown: PropTypes.func
}

Slider.propTypes = SliderProps
Slider.themeProps = themeProps
Slider.createVariants = componentCreateFactory(Slider)

/** @component */
export default Slider
