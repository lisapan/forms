'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import WizardPage from './components/WizardPage'


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={WizardPage}/>
        </Route>
      </Router>
    </Provider>
  )
}
