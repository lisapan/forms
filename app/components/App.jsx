'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'


export default (props) => {
  return (
    <div id="main" className="container-fluid">
      <div>
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  )
}

