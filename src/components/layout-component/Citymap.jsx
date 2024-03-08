import React from "react";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
var map = null; 
var marker = null;  

var apiKey = 'AIzaSyAjNZ2mWCXlioT3sHR6zsjRLTpzAKWaE2Y';

function CityMap({ lat, lon }) {
  if(lat && lon) {
    const position = {lat: lat, lng: lon};

    return (
      <div className="mapview" id="map">
        <APIProvider apiKey={apiKey}>
            <Map center={position} zoom={10}>
              <Marker position={position} />
            </Map>
        </APIProvider>
      </div>
    );
  }
}

export default CityMap;