import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import App from './App';
import './index.css';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { rootReducer } from './redux/rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
