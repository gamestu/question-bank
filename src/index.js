import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

function counter(state = 0 , action){
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

console.log(counter);
console.log(createStore);
let store = createStore(counter);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
