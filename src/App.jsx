import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import PageWrapper from './components/common/PageWrapper';
// eslint-disable-next-line import/no-unresolved
import MainContainer from './containers/MainContainer';

// import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
// import Header from './components/common/Header';

// const baseUrl = 'https://rickandmortyapi.com/api/character';

const App = () => {
  // const [state, setState] = useState([]);

  // axios.get(baseUrl).then((response) => {
  //   setState(response.data.results);
  // });

  // axios
  //   .get(baseUrl)
  //   .then((response) => {
  //     setState(response.data.results);
  //     // console.log(response.data.results);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
