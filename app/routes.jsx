'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import SimpleFormPage from './components/SimpleFormPage'
import MenuFormPage from './components/MenuFormPage'


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SimpleFormPage}/>
          <Route path="menuWizard" component={MenuFormPage}/>
        </Route>
      </Router>
    </Provider>
  )
}
