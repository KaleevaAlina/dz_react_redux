
import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import {requiredInput, correctInput, matchInput} from '../../Validation';

const myInput = (props) =>{
  const {input, type, placeholder, meta}=props;
  return (
      <Fragment>
      <input {...props.input} type={props.type} placeholder={props.placeholder}/>

      {meta.error &&
      meta.touched &&
      <div>
        {meta.error}
      </div>}
      </Fragment>
  )
}

class LoginForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form className='form' onSubmit={handleSubmit}>
        <Field className='form_title'
          component={myInput}
          name="username"
          type="text"
          placeholder="Имя поьзователя"
          //validate={[requiredInput, correctInput]}
          validate={[requiredInput]}
        />
        <Field className='form_title'
          component={myInput}
          name="password"
          type="password"
          placeholder="Пароль"
          validate={[requiredInput]}
        />
        <Field className='form_title'
          component={myInput}
          name="confirm-password"
          type="password"
          placeholder="Подтвердите пароль"
          validate={[requiredInput, matchInput]}
        />
        <button className="form_button" type="submit" label="submit">Вход</button>
      </form>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
}) (LoginForm);

export default LoginForm;