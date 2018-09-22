import React, { Component } from 'react'
import Map from './Map.js'
import ResponsiveDrawer from './ResponsiveDrawer.js'

class App extends Component {
  state = {
    places: [{title: 'Rockslide Brewery', name: 'Rockslide', position: {lat: 39.0670, lng: -108.5660}},
      {title: 'Edgewater Brewery', name: 'Edgewater', position: {lat: 39.0553, lng: -108.5578}},
      {title: 'Palisade Brewing Co.', name: 'Palisade', position: {lat: 39.1111, lng: -108.3543}},
      {title: 'Kannah Creek Brewing Co.', name: 'Kannah', position: {lat: 39.0853, lng: -108.5520}},
      {title: 'Copper Club Brewing Co.', name: 'Copper', position: {lat: 39.1591, lng: -108.7315}},
    ],
    filteredPlaces: [],
    searchItem: '',
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
    const {places, searchItem, filteredPlaces} = this.state

    return (
      <div className="App">
        <ResponsiveDrawer places={filteredPlaces}
          searchFunc={this.updateSearchItem}
          searchVal={searchItem}>
          <Map places={filteredPlaces}/>
        </ResponsiveDrawer>
      </div>
    )
  }
}

export default App
