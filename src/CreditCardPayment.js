import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class CreditCardPayment extends Component {

  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="zimaApp">
          <header className="App-header">

          </header>
            <h1>Confirm your purchase</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
        </div>
      </StripeProvider>
    )
  }

}

export default CreditCardPayment;
