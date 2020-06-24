import React from 'react';
import logo from './logo.svg';
import Provider from 'react-redux';
import store from './Redux/Store'
import './App.css';
import CakeContainer from './Components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
     <div className="App">
     <CakeContainer/>
    </div>
    </Provider>
    
  );
}

export default App;
