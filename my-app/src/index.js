import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './modules/containers/appContainer';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './modules/store/store';
import boardAction from './modules/actions/boardAction';
import handleClick from './modules/actions/clickAction';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppContainer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
