import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{lat: 39.0639,
          lng: -108.5506}}>

        {this.props.places.map((place) => {
          return (
            <Marker
              key={place.name}
              title= {place.title}
              name={place.name}
              position={place.position}
            />
          )
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8eJt4zLI0G9CyDvbfZs3tVKdgV-4J-h8')
})(MapContainer)
