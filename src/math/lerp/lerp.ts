export const lerp = (min: number, max: number, t: number): number =>
  min + t * (max - min)
