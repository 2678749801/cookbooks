import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import './assets/styles/reset.css'
import store from './store/index'
import {BrowserRouter} from 'react-router-dom'
import 'animate.css'
ReactDOM.render(
  <BrowserRouter>  
  <Provider store={store}> 
  <App />
  </Provider>
  </BrowserRouter> ,
  document.getElementById('root')
)


