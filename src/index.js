import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider}  from 'react-redux'
import {createStore, combineReducers,compose} from 'redux'
import Cart from './Redux/Reducers/Cart'


const Store=createStore(Cart, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={Store}>
  <React.StrictMode>
  <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);
