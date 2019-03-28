import React, { Component } from 'react';
import Cart from './Cart';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import Navbar from './Navbar';
const orderUrl = "http://localhost:3000/api/v1/orders";

class CompleteOrder extends Component {
 constructor() {
   super()
   this.state = {
     orderStatus: 'not complete',
   }
 }

 handleSubmit = (order) => {
   return fetch('http://localhost:3000/api/v1/orders', {
     method: 'POST',
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(order)
   }).then(response => response.json())
 }

 handleOrderSubmit = event => {
   event.preventDefault()

   return fetch(orderUrl, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('token')
     },
     body: JSON.stringify({ products: this.props.productsInCart })
   }).then(alert('Your order has been processed!'))
 }

  render() {
    return(
    <StripeProvider apiKey="pk_test_aQk1i0LvsEwnjnl3iG4SbKbZ00Vpway7rg">
      <div>
        <Cart
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
        />
      <div className="CC-payment">
        <Elements>
            <CheckoutForm handleOrderSubmit={this.handleOrderSubmit} />
        </Elements>

      </div>
    </div>
    </StripeProvider>
    )
  }

}

export default CompleteOrder;
