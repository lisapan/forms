'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import ReduxFormForm from './components/ReduxFormForm'
import ReactForm from './components/ReactForm'
import MenuFormPage from './components/MenuFormPage'


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to={'/reduxFormForm'}/>
          <Route path="reduxFormForm" component={ReduxFormForm} />
          <Route path="reactForm" component={ReactForm} />
          <Route path="menuForm" component={MenuFormPage} />
        </Route>
      </Router>
    </Provider>
  )
}
