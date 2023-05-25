import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const Map = ({ onLocationChange }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const handleMarkerDragEnd = (event) => {
    const { latLng } = event;
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results?.length) {
        const address = results[0].formatted_address;
        onLocationChange(address);
      }
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat: 37.7749, lng: -122.4194 }} // Set initial map center coordinates
      zoom={10} // Set initial zoom level
    >
      <Marker
        position={{ lat: 37.7749, lng: -122.4194 }} // Set initial marker position
        draggable
        onDragEnd={handleMarkerDragEnd}
      />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
