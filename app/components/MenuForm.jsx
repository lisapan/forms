import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderMenus = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Menu</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((menu, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Menu"
          onClick={() => fields.remove(index)}/>
        <h4>Menu #{index + 1}</h4>
        <Field
          name={`${menu}.name`}
          type="text"
          component={renderField}
          label="Menu Name"/>
        <FieldArray name={`${menu}.groups`} component={renderGroups}/>
      </li>
    )}
  </ul>
)

const renderGroups = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Group</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((group, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Group"
          onClick={() => fields.remove(index)}/>
        <Field
          name={`${group}.name`}
          type="text"
          component={renderField}
          label="Group Name"/>
        <FieldArray name={`${group}.items`} component={renderItems}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderItems = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Item</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((item, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Item"
          onClick={() => fields.remove(index)}/>
        <Field
          name={`${item}.name`}
          type="text"
          component={renderField}
          label="Item Name"/>
        <Field
          name={`${item}.price`}
          type="text"
          component={renderField}
          label="Price"/>
        <Field
          name={`${item}.posName`}
          type="text"
          component={renderField}
          label="Button Name"/>
        <Field
          name={`${item}.kitchenName`}
          type="text"
          component={renderField}
          label="Kitchen Name"/>
        <FieldArray name={`${item}.modifierGroups`} component={renderModifierGroups}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderModifierGroups = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Modifier Group</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((group, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Modifier Group"
          onClick={() => fields.remove(index)}/>
        <Field
          name={`${group}.name`}
          type="text"
          component={renderField}
          label="Modifier Group Name"/>
        <FieldArray name={`${group}.options`} component={renderModifierOptions}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderModifierOptions = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Option</button>
    </li>
    {fields.map((item, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Item"
          onClick={() => fields.remove(index)}/>
        <Field
          name={`${item}.name`}
          type="text"
          component={renderField}
          label="Option Name"/>
        <Field
          name={`${item}.price`}
          type="text"
          component={renderField}
          label="Price"/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const MenuForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="restaurantName" type="text" component={renderField} label="Restaurant Name"/>
      <FieldArray name="menus" component={renderMenus}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'menuForm',     // a unique identifier for this form
  validate
})(MenuForm)
