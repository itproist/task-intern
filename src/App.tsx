import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import PageWrapper from './components/common/PageWrapper';
// eslint-disable-next-line import/no-unresolved
import CharactersContainer from './containers/CharactersContainer';
// eslint-disable-next-line import/no-unresolved
import MainContainer from './containers/MainContainer';
// eslint-disable-next-line import/no-unresolved
import OneUserContainer from './containers/OneUserContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="character" element={<CharactersContainer />} />
        <Route path="character/:name" element={<OneUserContainer />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
