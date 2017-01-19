import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Card, Button, Input, Label, Form, Accordion, Icon} from 'semantic-ui-react'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <Form.Field>
        <Input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </Form.Field>
)

const renderNameInput=({ input, label, type, meta: { touched, error} }) => (
    <Form.Field>
      <Input className="header-field" transparent {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </Form.Field>
)

const renderMenus = ({ fields, meta: { touched, error } }) => (
  <div>
    <Button type="button" onClick={() => fields.push({})}>Add Menu</Button>
    {touched && error && <span>{error}</span>}
    <Card.Group id="cardContainer" >
    {fields.map((menu, index) =>
      <div key={index} className="cardDiv">
      <Card>
        <Card.Header className="header">
          <Field
            name={`${menu}.name`}
            type="text"
            component={renderNameInput}
            label="Enter Menu Name"/>
          <Button
            circular className='remove-btn' floated='right' type='button' size='mini' icon='remove'
            onClick={() => fields.remove(index)}/>
        </Card.Header>
      </Card>
      <FieldArray name={`${menu}.groups`} component={renderGroups}/>
      </div>
    )}
    </Card.Group>
  </div>

)

const renderGroups = ({ fields, meta: { touched, error } }) => (
  <div>
    <Button type="button" onClick={() => fields.push()}>Add Group</Button>
    {touched && error && <span>{error}</span>}
    <Accordion>
      <Accordion.Title>
        <Icon name='dropdown' />
        Groups
      </Accordion.Title>
      <Accordion.Content>
        {fields.map((group, index) =>
          <div key={index}>
            <Card>
              <Card.Header className="header">
                <Field
                  name={`${group}.name`}
                  type="text"
                  component={renderNameInput}
                  label="Enter Group Name"/>
                <Button
                circular className='remove-btn' floated='right' type='button' size='mini' icon='remove'
                onClick={() => fields.remove(index)}/>
              </Card.Header>
            </Card>
            <FieldArray name={`${group}.items`} component={renderItems}/>
          </div>
        )}
      </Accordion.Content>
    </Accordion>
    {error && <li className="error">{error}</li>}
  </div>
)

const renderItems = ({ fields, meta: { touched, error } }) => (
  <div>
    <Button type="button" onClick={() => fields.push()}>Add Item</Button>
    {touched && error && <span>{error}</span>}
    <Accordion>
      <Accordion.Title>
        <Icon name='dropdown' />
        Items
      </Accordion.Title>
      <Accordion.Content>
        {fields.map((item, index) =>
          <div key={index}>
            <Card>
              <Card.Header>
                <Field
                  name={`${item}.name`}
                  type="text"
                  component={renderNameInput}
                  label="Enter Item Name"/>
                <Button
                circular className='remove-btn' floated='right' type='button' size='mini' icon='remove'
                onClick={() => fields.remove(index)}/>
              </Card.Header>
              <Card.Content>
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
              </Card.Content>
            </Card>
            <FieldArray name={`${item}.modifierGroups`} component={renderModifierGroups}/>
          </div>
        )}
      </Accordion.Content>
    </Accordion>
    {error && <li className="error">{error}</li>}
  </div>
)

const renderModifierGroups = ({ fields, meta: { touched, error } }) => (
  <div>

      <Button type="button" onClick={() => fields.push()}>Add Modifier Group</Button>
      {touched && error && <span>{error}</span>}

    {fields.map((group, index) =>
      <Card key={index}>
        <Card.Header>
        <Field
          name={`${group}.name`}
          type="text"
          component={renderNameInput}
          label="Enter Modifier Name"/>
          <Button
          circular className='remove-btn' floated='right' type='button' size='mini' icon='remove'
          onClick={() => fields.remove(index)}/>
        </Card.Header>
        <Card.Content>
        <FieldArray name={`${group}.options`} component={renderModifierOptions}/>
        </Card.Content>
      </Card>
    )}
    {error && <li className="error">{error}</li>}
  </div>
)

const renderModifierOptions = ({ fields, meta: { error } }) => (
  <div>

      <Button type="button" onClick={() => fields.push()}>Add Option</Button>

    {fields.map((item, index) =>
      <Card key={index}>
        <Card.Header>
        <Field
          name={`${item}.name`}
          type="text"
          component={renderNameInput}
          label="Enter Option Name"/>
          <Button
          circular className='remove-btn' floated='right' type='button' size='mini' icon='remove'
          onClick={() => fields.remove(index)}/>
        </Card.Header>
        <Card.Content>
        <Field
          name={`${item}.price`}
          type="text"
          component={renderField}
          label="Price"/>
        </Card.Content>
      </Card>
    )}
    {error && <li className="error">{error}</li>}
  </div>
)

const MenuForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="restaurantName" type="text" component={renderNameInput} label="Restaurant Name"/>
      <FieldArray name="menus" component={renderMenus}/>
      <Button type="submit" disabled={submitting}>Submit</Button>
      <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
    </Form>
  )
}

export default reduxForm({
  form: 'menuForm',     // a unique identifier for this form
  validate
})(MenuForm)
