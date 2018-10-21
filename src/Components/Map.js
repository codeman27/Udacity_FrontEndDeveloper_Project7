import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import '../CSS/Map.css'

class MapContainer extends Component {
  state = {
    markers: [],
  }

  gm_authFailure = () => {
      window.alert("Google Maps error!")
  }

  //Can't get google-maps-react to give me something when the API is blocked
  componentDidMount = () => {
    //This isn't working
    window.gm_authFailure = this.gm_authFailure
    //this.gm_authFailure()
    this.setState({ markers: this.refs})
    this.props.getMarkerList(this.refs)
  }

  render() {
    const {places, activeMarkerPos, showingInfoWindow, selectedPlace, google} = this.props
    console.log(selectedPlace.name)
    console.log()
    return (
      <Map className='map-body'
        google={google}
        zoom={10}
        initialCenter={{lat: 39.0639, lng: -108.5506}}
        onClick={this.props.mapClick}
      >

        {places.map((place) => (
           <Marker
              key={place.name}
              title= {place.title}
              name={place.name}
              position={place.position}
              onClick={() => this.props.markerClick(place, place.position)}
              ref={place.name}
              animation={(selectedPlace.name === place.name)
                && this.props.google.maps.Animation.BOUNCE}
            />
          )
        )}
        <InfoWindow
          position={activeMarkerPos.position}
          visible={showingInfoWindow}
          options={{pixelOffset: new window.google.maps.Size(0,-40)}}>
           <div>
             <h1>{selectedPlace.name}</h1>
             <p>Yelp Rating: <span className='rating'>{selectedPlace.yelpRating === '' ? '...loading' : selectedPlace.yelpRating}</span></p>
           </div>
       </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8eJt4zLI0G9CyDvbfZs3tVKdgV-4J-h8')
})(MapContainer)
