import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './modules/home';
import configureStore from './redux/configureStore';
import axiosInterceptor from './redux/axios/axiointerceptor'; 

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
