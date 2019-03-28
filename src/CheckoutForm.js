import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import PaymentForm from './PaymentForm';

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) this.setState({complete: true}); }

  render() {
    if (this.state.complete) return <h1>Purchase complete</h1>

    return (
      <div className="checkout">
        <div className="payment_details">
          <p>Please enter your credit card details</p>
          <CardElement />
          <button className="category_eng btn" type="submit" onClick={this.submit}>Complete order</button>
        </div>
          <PaymentForm handleOrderSubmit={this.props.handleOrderSubmit}/>
      </div>
    )
  }

}

export default injectStripe(CheckoutForm);
