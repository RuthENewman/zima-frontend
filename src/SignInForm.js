import React, { Component } from 'react';
import API from './API';
import Navbar from './Navbar';

class SignInForm extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    const { signin, history } = this.props
    const user = this.state
    event.preventDefault()
    API.signin(user)
      .then(data => {
        if (data.error) {
          alert('Incorrect email or password. Please try again or create an account.')
        } else {

          signin(data)
          history.push('/myaccount')
        }
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <Navbar username={this.props.username} signout={this.props.signout}/>
        <h2 className="category_eng" id="login-header">Log in to your account</h2>
        <form className="signin_form">
          <p><label
          className="category_eng"
          id="email-label"
          >Email address</label></p>
          <input
          id='emailInput'
          value={this.state.email}
          onChange={this.handleChange}
          margin='normal'
          placeholder='Your email address'
          name='email'
          ></input>
          <p><label
          className="category_eng"
          id="password-label"
          >Password</label></p>
          <input
          id='passwordInput'
          value={this.state.password}
          onChange={this.handleChange}
          margin='normal'
          placeholder='Enter your password...'
          name='password'
          type='password'
          ></input>
          <br/>
          <button
          onClick={this.handleSubmit}
          type="submit"
          id="login_button"
          className="cart_button"
          >Log in</button>
        </form>
      </div>
    )
  }

}

export default SignInForm;
