import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import App from './App';
import './index.css';
import { rootReducer } from './redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
