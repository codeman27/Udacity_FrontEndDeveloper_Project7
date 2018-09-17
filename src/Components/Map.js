import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    places: [{title: 'Rockslide Brewery', name: 'Rockslide', position: {lat: 39.0670, lng: -108.5660}},
      {title: 'Edgewater Brewery', name: 'Edgewater', position: {lat: 39.0553, lng: -108.5578}},
      {title: 'Palisade Brewing Co.', name: 'Palisade', position: {lat: 39.1111, lng: -108.3543}},
      {title: 'Kannah Creek Brewing Co.', name: 'Kannah', position: {lat: 39.0853, lng: -108.5520}},
      {title: 'Copper Club Brewing Co.', name: 'Copper', position: {lat: 39.1591, lng: -108.7315}},
      ]
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{lat: 39.0639,
          lng: -108.5506}}>

        {this.state.places.map((place) => {
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
