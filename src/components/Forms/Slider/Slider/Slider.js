/**
 * @class Slider
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Slider as CompoundSlider,
  Rail,
  Handles,
  Tracks
} from "react-compound-slider"
import { applyVariants, spacing, color } from "../../../../theming"
import Handle from "./Slider.Handle"
import Track from "./Slider.Track"
import themeProps from "./Slider.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const Slider = ({
  variant,
  min = 0,
  max = 100,
  step = 10,
  onFocus,
  onKeyDown,
  onBlur,
  onUpdate,
  onChange,
  onSlideStart,
  defaultValue = 0,
  value,
  ...restProps
}) => {
  const [values, setValues] = useState([value || defaultValue])
  const [update, setUpdate] = useState([defaultValue])

  const handleUpdate = value => {
    setUpdate(value)
    onUpdate && onUpdate(update[0])
  }

  const handleChange = value => {
    setValues(values)
    onChange && onChange(value[0])
  }

  const handleStart = values => {
    setValues(values)
    onSlideStart && onSlideStart(values[0])
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
        onUpdate={handleUpdate}
        onChange={handleChange}
        onSlideStart={handleStart}
        values={values}
        variant={variant}
        {...restProps}
      >
        <Rail>{({ getRailProps }) => <StyledRail {...getRailProps()} />}</Rail>
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

Slider.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}
Slider.themeProps = themeProps
Slider.createVariants = componentCreateFactory(Slider)

/** @component */
export default Slider
