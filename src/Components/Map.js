import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map className='map-body'
        google={this.props.google}
        zoom={10}
        initialCenter={{lat: 39.0639, lng: -108.5506}}
        onClick={this.props.mapClick}
      >

        {this.props.places.map((place) => (
            <Marker
              key={place.name}
              title= {place.title}
              name={place.name}
              position={place.position}
              onClick={this.props.markerClick}
            />
          )
        )}
        <InfoWindow
         marker={this.props.activeMarker}
         visible={this.props.showingInfoWindow}>
           <div>
             <h1>{this.props.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8eJt4zLI0G9CyDvbfZs3tVKdgV-4J-h8')
})(MapContainer)
