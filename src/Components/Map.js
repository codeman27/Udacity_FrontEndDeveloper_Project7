import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class MapContainer extends Component {
  state = {
    markers: [],
  }

  componentDidMount = () => {
    console.log(this.props)
    this.setState({ markers: this.refs})
    this.props.getMarkerList(this.refs)
  }

  render() {
    //console.log(this.props.activeMarkerPos.position)
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
              ref={place.name}
            />
          )
        )}
        <InfoWindow
          position={this.props.activeMarkerPos.position}
          visible={this.props.showingInfoWindow}
          options={{pixelOffset: new window.google.maps.Size(0,-40)}}
          onClick={this.test}>
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
