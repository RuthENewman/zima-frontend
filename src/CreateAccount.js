import React, {Component} from 'react';
import API from './API';
import Navbar from './Navbar';

class CreateAccount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { history } = this.props
      const user = this.state
      API.create(user).then(data => {
        if (data.error) {
          alert('Email address already in use')
        } else {
          history.push("/myaccount")
        }
      })
    }

  render() {
    return (
      <div id="create_account">
        <Navbar username={this.props.username} signout={this.props.signout}/>
        <h2 className="category_eng" id="create_account_header">Create a ZIMA account</h2>
        <form id="create_account_form" onSubmit={this.handleSubmit}>
          <p><label className="category_eng">First name</label></p>
          <input
          onChange={this.handleChange}
          type="text"
          value={this.state.first_name}
          placeholder="Enter your first name"
          id="firstNameInput"
          name="first_name" required
          ></input>
          <p><label className="category_eng">Last name</label></p>
          <input
          onChange={this.handleChange}
          type="text"
          value={this.state.last_name}
          placeholder="Enter your last name"
          id="lastNameInput"
          name="last_name" required
          ></input>
          <p><label className="category_eng">Email</label></p>
          <input
          onChange={this.handleChange}
          type="email"
          value={this.state.email}
          placeholder="Enter your email address"
          id="emailInputCreateAccount"
          name="email" required
          >
          </input>
          <p><label className="category_eng">Password</label></p>
          <input
          onChange={this.handleChange}
          type="password"
          value={this.state.password}
          placeholder="Create a password"
          id="PasswordCreateAccount"
          name="password" required
          >
          </input>
          <br/>
          <button
            type="submit"
            id="create_account_btn"
          >Submit</button>
        </form>
      </div>
    )
  }

}

export default CreateAccount;
