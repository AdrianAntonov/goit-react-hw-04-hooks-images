import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    text: '',
  };

  handleSearchbarInput = arg => {
    this.setState({ text: arg });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarInput} />
        <ImageGallery searchValue={this.state.text} />
        {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      </div>
    );
  }
}

export default App;
