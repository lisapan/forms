import React from 'react'
import MenuForm from './MenuForm';

class MenuFormPage extends React.Component {

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
      <MenuForm onSubmit={this.handleSubmit} />
    );
  }
}

export default MenuFormPage
