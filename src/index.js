import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { store } from './store';
import Basket from './components/Basket'
import Showcase from './components/Showcase'

const basket = ReactDOM.createRoot(document.getElementById('basket'))
basket.render(
  <React.StrictMode>
    <Provider store={store}>
      <Basket />
    </Provider>
  </React.StrictMode>
);

const showcase = ReactDOM.createRoot(document.getElementById('showcase'))
showcase.render(
  <React.StrictMode>
    <Provider store={store}>
      <Showcase />
    </Provider>
  </React.StrictMode>
);
