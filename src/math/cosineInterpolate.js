export const cosineInterpolate = (min, max, t) => {
  const mu2 = (1 - Math.cos(t * Math.PI)) / 2
  return min * (1 - mu2) + max * mu2
}

// TODO : Check out -> https://github.com/osuushi/Smooth.js/
