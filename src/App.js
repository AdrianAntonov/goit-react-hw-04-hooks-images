// import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

function App() {
  const [text, setText] = useState('');

  const handleSearchbarInput = arg => {
    setText(arg);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchbarInput} />
      <ImageGallery searchValue={text} />
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
    </div>
  );
}

export default App;
