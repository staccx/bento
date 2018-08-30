import * as THREE from "three"

/**
 *
 * Creator of typical test AnimationClips / KeyframeTracks
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */

export const createRotationAnimation = (period, axis = "x") => {
  const times = [0, period]

  const values = [0, 360]

  const trackName = ".rotation[" + axis + "]"

  const track = new THREE.NumberKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, period, [track])
}

export const createScaleAxisAnimation = (
  period,
  axis = "x",
  scaleFrom = 0.01,
  scaleTo = 1
) => {
  const times = [0, period]

  const values = [scaleFrom, scaleTo]

  const trackName = ".scale[" + axis + "]"

  const track = new THREE.NumberKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, period, [track])
}

export const createShakeAnimation = (duration, shakeScale) => {
  const times = []

  const values = []

  const tmp = new THREE.Vector3()

  for (let i = 0; i < duration * 10; i++) {
    times.push(i / 10)

    tmp
      .set(
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0
      )
      .multiply(shakeScale)
      .toArray(values, values.length)
  }

  const trackName = ".position"
  const track = new THREE.VectorKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, duration, [track])
}

export const createPulsationAnimation = (duration, pulseScale) => {
  const times = []

  const values = []

  const tmp = new THREE.Vector3()

  for (let i = 0; i < duration * 10; i++) {
    times.push(i / 10)

    const scaleFactor = Math.random() * pulseScale
    tmp
      .set(scaleFactor, scaleFactor, scaleFactor)
      .toArray(values, values.length)
  }

  const trackName = ".scale"

  const track = new THREE.VectorKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, duration, [track])
}

export const createVisibilityAnimation = duration => {
  const times = [0, duration / 2, duration]

  const values = [true, false, true]

  const trackName = ".visible"

  const track = new THREE.BooleanKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, duration, [track])
}

export const createMaterialColorAnimation = (duration, colors) => {
  const times = []

  const values = []

  const timeStep = duration / colors.length

  for (let i = 0; i <= colors.length; i++) {
    times.push(i * timeStep)
    values.push(colors[i % colors.length])
  }

  const trackName = ".material[0].color"

  const track = new THREE.ColorKeyframeTrack(trackName, times, values)

  return new THREE.AnimationClip(null, duration, [track])
}
