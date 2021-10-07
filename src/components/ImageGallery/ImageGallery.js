import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Services from '../../Services';
import Loader from 'react-loader-spinner';
import Button from '../Button';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ searchValue }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const handleScroll = () => {
    setScroll(true);
    setPage(prevPage => prevPage + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    setScroll(false);
    Services.fetching(searchValue, page)
      .then(response => {
        if (response.data.hits.length === 0) {
          // toast('Not valid input! Try again!');
          alert('Not valid input! Try again!');
        }
        setStatus('pending');

        setImages(prevImages => [...prevImages, ...response.data.hits]);

        setStatus('resolved');

        scroll &&
          window.scrollBy({
            top: document.documentElement.clientHeight - 160,
            behavior: 'smooth',
          });
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [page, scroll, searchValue]);

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
    return <h2>{error.message}</h2>;
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
            <Button data={handleScroll} />
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
