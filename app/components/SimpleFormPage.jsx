import React from 'react'
import SimpleForm from './SimpleForm';

class SimpleFormPage extends React.Component {

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
      <SimpleForm onSubmit={this.handleSubmit} />
    );
  }
}

export default SimpleFormPage
