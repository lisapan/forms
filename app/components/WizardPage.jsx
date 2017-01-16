import React from 'react'
import FieldArraysForm from './FieldArraysForm';

class WizardPage extends React.Component {

  handleSubmit = (values) => {
    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
          resolve()
        }, 500)
      })
  }

  render() {
    return (
      <FieldArraysForm onSubmit={this.handleSubmit} />
    );
  }
}

export default WizardPage
