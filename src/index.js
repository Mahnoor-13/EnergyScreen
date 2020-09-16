import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./Routes/Routes";
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDU9y0094BUAy2cRkJg6UEZ61oZWyjzezA",
  authDomain: "ionictest-43902.firebaseapp.com",
  databaseURL: "https://ionictest-43902.firebaseio.com",
  projectId: "ionictest-43902",
  storageBucket: "ionictest-43902.appspot.com",
  messagingSenderId: "297878369339",
  appId: "1:297878369339:web:7e31cea71006a056a4581e",
  measurementId: "G-QDWVYLMX8X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
    <Routes />
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
