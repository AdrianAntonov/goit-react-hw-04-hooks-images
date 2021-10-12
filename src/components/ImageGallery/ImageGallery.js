import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Services from '../../Services';
import LoaderComponent from '../Loader/Loader';
import Button from '../Button';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ searchValue }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setPage(1);
    setImages([]);
  }, [searchValue]);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    if (page === 1) {
      setStatus('pending');
    }

    Services.fetching(searchValue, page)
      .then(response => {
        if (response.data.hits.length === 0) {
          toast('Not valid input! Try again!');
        }
        if (page === 1) {
          setImages([...response.data.hits]);
        } else {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
        }

        setStatus('resolved');

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [page, searchValue]);

  if (status === 'idle') {
    return null;
  }
  if (status === 'pending') {
    return <LoaderComponent />;
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
            <Button data={() => setPage(prevPage => prevPage + 1)} />
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
