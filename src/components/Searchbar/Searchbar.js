import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

function Searchbar({ onSubmit }) {
  // state = {
  //   inputValue: '',
  // };

  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = e => {
    if (inputValue.trim() === '') {
      alert('Wrong input!');
      return;
    }
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleChange = e => {
    // this.setState({ inputValue: e.target.value });
    setInputValue(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleOnSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={inputValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
