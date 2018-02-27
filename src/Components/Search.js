import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../App.css';

class Search extends Component {

  constructor(props) {
     super(props)
     this.state = { address: '' }
     this.onChange = (address) => { this.setState({ address }) }
   }

   handleFormSubmit = (event) => {
     this.props.handleChange(this.state.address);

     event.preventDefault()

     geocodeByAddress(this.state.address)
       .then(results => getLatLng(results[0]))
       .then(latLng => this.props.handlePos(latLng))
       .catch(error => console.error('Error', error))
   }

   render() {
     const inputProps = {
       value: this.state.address,
       onChange: this.onChange,
       type: 'search',
       placeholder: 'Recherchez une addresse ...',
       autoFocus: true,
     }
     return (
       <div>
         <PlacesAutocomplete inputProps={inputProps} classNames={{ autocompleteContainer: 'ac-container', root: 'search-input' }}/>
         <button onClick={this.handleFormSubmit.bind(this)} >Recherche</button>
       </div>
     )
   }
 }

export default Search
