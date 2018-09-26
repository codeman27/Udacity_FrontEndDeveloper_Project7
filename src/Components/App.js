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
    activeMarkerPos: {},
    selectedPlace: {},
    markers: {},
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  onMarkerClick = (props, position) => {
    console.log('onMarkerClick: ')
    console.log(position)
    this.setState({
      selectedPlace: props,
      activeMarkerPos: position,
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

  onButtonClick = (props, placeName) => {
    let marker = {}

    Object.keys(this.state.markers).filter((key, index) => {
      if(this.state.markers[key].marker.name === placeName) {
        marker = this.state.markers[key]
      }
    });
    this.onMarkerClick(props, marker.marker)
    this.handleDrawerToggle()
  }

  getMarkerList = (markers) => {
    this.setState({ markers })
  }

  updatePlaceList = () => {
    this.state.searchItem === '' ? this.setState({filteredPlaces: this.state.places}) :
    this.setState({filteredPlaces: this.state.places.filter(place => place.name.toUpperCase().includes(this.state.searchItem.toUpperCase()))})
  }

  updateSearchItem = (event) => {
    this.setState({searchItem: event.target.value}, () => {this.updatePlaceList()})
  }

  componentDidMount() {
    this.updatePlaceList()
  }

  render() {
    const {searchItem, filteredPlaces, selectedPlace, showingInfoWindow, activeMarkerPos, mobileOpen} = this.state

    return (
      <div className="App">
        <ResponsiveDrawer places={filteredPlaces}
          searchFunc={this.updateSearchItem}
          searchVal={searchItem}
          selectedPlace={selectedPlace}
          showingInfoWindow={showingInfoWindow}
          activeMarkerPos={activeMarkerPos}
          onButtonClick={this.onButtonClick}
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={mobileOpen}>
          <Map places={filteredPlaces}
            markerClick={this.onMarkerClick}
            mapClick={this.onMapClick}
            selectedPlace={selectedPlace}
            showingInfoWindow={showingInfoWindow}
            activeMarkerPos={activeMarkerPos}
            getMarkerList={this.getMarkerList}
          />
        </ResponsiveDrawer>
      </div>
    )
  }
}

export default App
