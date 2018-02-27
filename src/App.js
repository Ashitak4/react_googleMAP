import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'
import Map from './Components/Map'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = { place: 'Bordeaux', lat: 44.837789, lng: -0.57918, latLng: Object({lat: 44.837789, lng: -0.57918})};
    }

componentDidUpdate() {

}

    changeAddress(newValue) {
      geocodeByAddress(newValue)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))
        this.setState({
          place: newValue,
        });
     }

     changePos(newpos) {
       this.setState({
         lat: newpos.lat,
         lng: newpos.lng,
         latLng: newpos,
       });
      }

  render() {
    return (
      <div>
        <h1>Exercice pressing privé</h1>
        <Search handleChange={this.changeAddress.bind(this)} handlePos={this.changePos.bind(this)}/>
        <Map place={this.state.place} pos={this.state.latLng}/>
      </div>
    );
  }
}

export default App;
