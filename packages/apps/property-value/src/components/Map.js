import React from "react"
import { compose, mapProps, withProps } from "recompose"

import {
  GoogleMap,
  OverlayView,
  withGoogleMap,
  withScriptjs
} from "react-google-maps"
import { getStreetViewImageUrl } from "../store/property"

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2)
})

const Map = compose(
  mapProps(props => {
    console.log(props)
    return {
      center: {
        ...props
      },
      ...props
    }
  }),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={props.center}>
    <OverlayView
      position={props.center}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <img
        src={getStreetViewImageUrl(props.center, 256)}
        alt={"streetviewimage"}
      />
    </OverlayView>
  </GoogleMap>
))
export default Map
