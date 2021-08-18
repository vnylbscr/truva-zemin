import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const defaultCenter = { lat: 41.0079534826947, lng: 29.241554748953824 };
const defaultOptions = { scrollwheel: true };

const RegularMap = withScriptjs(
   withGoogleMap((props) => (
      <GoogleMap defaultZoom={16} defaultCenter={defaultCenter} defaultOptions={defaultOptions}>
         <Marker position={defaultCenter} />
      </GoogleMap>
   ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '500px' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps() {
   return (
      <RegularMap
         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
         loadingElement={<div style={loadingElementStyle} />}
         containerElement={<div style={containerElementStyle} />}
         mapElement={<div style={mapElementStyle} />}
      />
   );
}
