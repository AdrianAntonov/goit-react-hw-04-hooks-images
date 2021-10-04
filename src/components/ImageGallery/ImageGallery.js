import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Button from '../Button';
import ImageGalleryItem from '../ImageGalleryItem';

const KEY = '23540624-9aec9adb1c30af208be906523';

function ImageGallery({ searchValue }) {
  console.log('ImageGalery');
  // state = {
  //   images: [],
  //   page: 1,
  //   scroll: false,
  //   error: '',
  //   status: 'idle',
  // };

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchValue !== this.props.searchValue) {
  //     this.setState({ status: 'pending', images: [], scroll: false });

  //     this.fetchingData();
  //   }
  // }
  // useEffect(() => {
  //   console.log('effect searchValue');
  //   setStatus('pending');
  //   fetchingData();
  // }, [searchValue]);

  console.log(scroll);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    console.log('useEffect');
    fetchingData();
    setStatus('pending');
    // setImages([]);
    setScroll(false);
  }, [searchValue]);

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleButton = () => {
    setScroll(true);
    fetchingData();
    // console.log('button click');
  };

  const fetchingData = () => {
    console.log('fetching');
    axios
      .get(
        `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        console.log('response');
        if (response.data.hits.length === 0) {
          // toast('Not valid input! Try again!');
          alert('Not valid input! Try again!');
        }

        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setPage(prevPage => prevPage + 1);
        setStatus('resolved');
        setScroll(true);

        if (scroll) {
          console.log('scroll');
          handleScroll();
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  if (status === 'idle') {
    return null;
  }
  if (status === 'pending') {
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

  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <ul className="ImageGallery">
          {/* <!-- Набор <li> с изображениями --> */}
          {images.map(item => (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              picture={item.webformatURL}
              modalPicture={item.largeImageURL}
            />
          ))}
        </ul>

        {images.length > 0 && (
          <div className="DivButton">
            <Button data={handleButton} />
          </div>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default ImageGallery;
