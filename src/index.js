import React from 'react';
import ReactDOM from 'react-dom';
import'bootstrap/dist/css/bootstrap.css'
import Cedula from './pages/Cedula'
import App from './Components/App'
const container =  document.getElementById('root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<App/>,container)
