import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const renderField = ({ input, label,  type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const doSubmit = (values) => {
  new Promise(resolve => {
      setTimeout(() => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
      }, 500)
    })
}

const ReduxFormForm = (props) => {
  const { handleSubmit, invalid, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <Field name="firstName" type="text" component={renderField} label="First Name" validate={[required]} normalize={toAllCaps}/>
      <Field name="lastName" type="text" component={renderField} label="Last Name" validate={[required]} normalize={toAllCaps}/>
      <Field name="email" type="text" component={renderField} label="E-mail" validate={[required, email]} normalize={toAllCaps}/>
      <div>
        <button type="submit" disabled={invalid || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'reduxFormForm',
})(ReduxFormForm)

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const toAllCaps = (value) => {
  if (!value) {
    return value
  }
  return value.toUpperCase();
}
