import axios from 'axios';

function fetching(searchValue, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '23540624-9aec9adb1c30af208be906523';

  return axios.get(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  // return fetch(
  //   `${BASE_URL}?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  // ).then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   // return Promise.reject(new Error('Что-то пошло не так'));
  // });
}

const fetchingApi = {
  fetching,
};

export default fetchingApi;
