import React, { Component } from 'react'

class ReactForm extends Component {

  constructor(props){
    super(props)
    this.state = { values: {} }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstNameChange(event){
    this.setState({
      values:{
        ...this.state.values,
        firstName: event.target.value
      }
    })
  }

  handleLastNameChange(event){
    this.setState({
      values:{
        ...this.state.values,
        lastName: event.target.value
      }
    })
  }

  handleEmailChange(event){
    this.setState({
      values:{
        ...this.state.values,
        email: event.target.value
      }
    })
  }

  handleSubmit(event){
    event.preventDefault()
    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(this.state.values, null, 2)}`)
          resolve()
        }, 500)
      })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <div className="reactFormInput">
            <input type="text" placeholder="First Name" value={this.state.values.firstName || ''} onChange={this.handleFirstNameChange}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div className="reactFormInput">
            <input type="text" placeholder="Last Name" value={this.state.values.lastName || ''} onChange={this.handleLastNameChange}/>
          </div>
        </div>
        <div>
          <label>E-mail</label>
          <div className="reactFormInput">
            <input type="email" placeholder="E-mail" value={this.state.values.email || ''} onChange={this.handleEmailChange}/>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button">Clear Values</button>
        </div>
      </form>
    )
  }
}

export default ReactForm
