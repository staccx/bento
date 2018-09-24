import React from "react"
import { compose, mapProps, withProps } from "recompose"

import {
  GoogleMap,
  OverlayView,
  withGoogleMap,
  withScriptjs
} from "react-google-maps"
import Marker from "./Marker"
import { apiKey } from "../config/googleMaps"

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2) - 4, // border
  y: -(height / 2) - 85
})

const defaultOptions = {
  disableDefaultUI: true,
  gestureHandling: "none",
  zoomControl: false
}

const Map = compose(
  mapProps(props => {
    return {
      center: {
        ...props
      },
      ...props
    }
  }),
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.center}
    defaultOptions={defaultOptions}
  >
    <OverlayView
      position={props.center}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <Marker location={props.center} />
    </OverlayView>
  </GoogleMap>
))
export default Map
