import './App.css';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImagesResult from './ImageList';

class App extends React.Component {
  state = {images: []};

  onSubmitInput = term => {
    console.log (term);
    axios
      .get ('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
          Authorization: 'Client-ID MXe4WMCEIG0wRp6FzsVjmc06JDJ2QUcfY2Uq90f_Vh0',
        },
      })
      .then (response => {
        console.log (response.data.results);
        this.setState ({images: response.data.results});
      });
  };
  render () {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmitInput={this.onSubmitInput} />
        Found: {this.state.images.length} images
        <ImagesResult images={this.state.images} />
      </div>
    );
  }
}

export default App;
