import React, { Component } from 'react'
import Map from './Map.js'
import ResponsiveDrawer from './ResponsiveDrawer.js'

class App extends Component {
  state = {
    places: [{title: 'Rockslide Brewery', name: 'Rockslide', position: {lat: 39.0670, lng: -108.5660}, address: '2511 401 Main St, Grand Junction, CO 81501'},
      {title: 'Edgewater Brewery', name: 'Edgewater', position: {lat: 39.0553, lng: -108.5578}, address: '905 Struthers Ave, Grand Junction, CO 81501'},
      {title: 'Palisade Brewing Co.', name: 'Palisade', position: {lat: 39.1111, lng: -108.3543}, address: '200 Peach Ave, Palisade, CO 81526'},
      {title: 'Kannah Creek Brewing Co.', name: 'Kannah', position: {lat: 39.0853, lng: -108.5520}, address: '1960 N 12th St, Grand Junction, CO 81501'},
      {title: 'Copper Club Brewing Co.', name: 'Copper', position: {lat: 39.1591, lng: -108.7315}, address: '233 E Aspen Ave, Fruita, CO 81521'},
    ],
    filteredPlaces: [],
    searchItem: '',
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) => {
    console.log('onMarkerClick')
    console.log(marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  updatePlaceList = () => {
    this.state.searchItem === '' ? this.setState({filteredPlaces: this.state.places}) :
    this.setState({filteredPlaces: this.state.places.filter(place => place.name.includes(this.state.searchItem))})
  }

  updateSearchItem = (event) => {
    this.setState({searchItem: event.target.value}, () => {this.updatePlaceList()})
  }

  componentDidMount() {
    this.updatePlaceList()
  }

  render() {
    const {searchItem, filteredPlaces, selectedPlace, showingInfoWindow, activeMarker} = this.state

    return (
      <div className="App">
        <ResponsiveDrawer places={filteredPlaces}
          searchFunc={this.updateSearchItem}
          searchVal={searchItem}
          markerClick={this.onMarkerClick}
          mapClick={this.onMapClick}
          selectedPlace={selectedPlace}
          showingInfoWindow={showingInfoWindow}
          activeMarker={activeMarker}>
          <Map places={filteredPlaces}
            markerClick={this.onMarkerClick}
            mapClick={this.onMapClick}
            selectedPlace={selectedPlace}
            showingInfoWindow={showingInfoWindow}
            activeMarker={activeMarker}
          />
        </ResponsiveDrawer>
      </div>
    )
  }
}

export default App
