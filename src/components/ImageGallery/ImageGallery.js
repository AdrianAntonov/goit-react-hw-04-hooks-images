import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Button from '../Button';
import ImageGalleryItem from '../ImageGalleryItem';

const KEY = '23540624-9aec9adb1c30af208be906523';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    scroll: false,
    error: '',
    status: 'idle',
  };

  static propTypes = {
    searchValue: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ status: 'pending', images: [], scroll: false });

      this.fetchingData();
    }
  }

  fetchingData = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.props.searchValue}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        if (response.data.hits.length === 0) {
          // toast('Not valid input! Try again!');
          alert('Not valid input! Try again!');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          loading: false,
          page: prevState.page + 1,
          status: 'resolved',
        }));

        if (this.state.scroll) {
          this.handleScroll();
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleButton = () => {
    this.setState({ scroll: true });
    this.fetchingData();
  };

  render() {
    if (this.state.status === 'idle') {
      return null;
    }
    if (this.state.status === 'pending') {
      return (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          className="Loader"
        />
      );
    }

    if (this.state.status === 'rejected') {
      return <h2>{this.state.error}</h2>;
    }

    if (this.state.status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {/* <!-- Набор <li> с изображениями --> */}
            {this.state.images.map(item => (
              <ImageGalleryItem
                key={item.id}
                id={item.id}
                picture={item.webformatURL}
                modalPicture={item.largeImageURL}
              />
            ))}
          </ul>

          {this.state.images.length > 0 && (
            <div className="DivButton">
              <Button data={this.handleButton} />
            </div>
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
