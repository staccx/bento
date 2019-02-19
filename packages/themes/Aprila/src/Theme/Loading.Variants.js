import React from "react"
import { theming, Loading, Image, Wrapper } from "@staccx/base"
import { css } from "styled-components"
import {
  AtomSpinner,
  BreedingRhombusSpinner,
  CirclesToRhombusesSpinner,
  FingerprintSpinner,
  PixelSpinner
} from "react-epic-spinners"

// We assume the loader exists
const DefaultLoader = ({ src, ...props }) => (
  <Wrapper variant={"centerAlign"}>
    <Image
      {...props}
      src={src || "/spinner-looped.gif"}
      alt={"Laster. Vennligst vent"}
    />
  </Wrapper>
)
export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: DefaultLoader,
    atom: AtomSpinner,
    breeding: BreedingRhombusSpinner,
    circles: CirclesToRhombusesSpinner,
    finger: FingerprintSpinner,
    pixel: PixelSpinner
  },
  Loading.themeProps.component
)

export const loadingStyle = theming.createVariants(
  {
    centerAlign: css`
      text-align: center;
    `
  },
  Wrapper.themeProps.wrapper
)
