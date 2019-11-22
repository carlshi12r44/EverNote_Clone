import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');




firebase.initializeApp({
    apiKey: "AIzaSyDR0RUpEu798wC2CCZt-5RKzae8NJ85Nks",
    authDomain: "evernoteclone-525c7.firebaseapp.com",
    databaseURL: "https://evernoteclone-525c7.firebaseio.com",
    projectId: "evernoteclone-525c7",
    storageBucket: "evernoteclone-525c7.appspot.com",
    messagingSenderId: "207950314645",
    appId: "1:207950314645:web:205a61c5bfe86c3d2e2f9c",
    measurementId: "G-LYZRF2MY16"
});


ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
