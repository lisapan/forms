'use strict'
import React from 'react'
import {render} from 'react-dom'

import Routes from './routes'

import * as firebase from "firebase";

render(
  <Routes />,
  document.getElementById('main')
)


var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
