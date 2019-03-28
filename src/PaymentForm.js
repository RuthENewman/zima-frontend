import React, {Component} from 'react';
import ShippingAddress from './ShippingAddress';
import {Link} from 'react-router-dom';

class PaymentForm extends Component {
  constructor() {
    super()

    this.state = {
      showShippingAddress: true,
    }
  }

  handleCheckbox = (event) => {
    this.setState({
      showShippingAddress: !this.state.showShippingAddress
    })
  }



  render() {
    return (
      <div>
        <div className="checkout_container" id="payment_container">
          <form id="payment_form" onChange={this.handleSubmit}>
            <div>
              <p className="category_eng">Accepted Cards</p>
              <div className="checkout-icon-container">
                <i id="visa-logo" className="fab fa-cc-visa"></i>
                <i id="amex-logo" className="fab fa-cc-amex"></i>
                <i id="mastercard-logo" className="fab fa-cc-mastercard"></i>
              </div>
            </div>
            <div>
                <h3 className="category_eng">Billing Address</h3>
                <label htmlFor="fname">Full Name</label>
                <input type="text" className="category_eng" id="fname" name="firstname" placeholder="Your name"></input>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="category_eng" name="email" placeholder="Your email"></input>
                <label htmlFor="adr"><i className="fa fa-address-card-o category_eng"></i> Address</label>
                <input type="text" id="adr" className="category_eng" name="address" placeholder="Your address"></input>
                <label htmlFor="city"><i className="fa fa-institution category_eng"></i> City</label>
                <input type="text" id="city" className="category_eng" name="city" placeholder="e.g. Moscow"></input>

                <div>
                  <div className="category_eng">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" placeholder="e.g. Russia"></input>
                  </div>

                  <div>
                    <label htmlFor="zip">Zip or Post code</label>
                    <input type="text" id="post_code" name="post_code" placeholder="Your Post or Zip code"></input>
                  </div>

                </div>
            </div>

              <div>
                <label>
                  <input
                  type="checkbox"
                  name="sameadr"
                  onClick={this.handleCheckbox}
                  ></input> Shipping address same as billing
                </label>

              </div>
              { this.state.showShippingAddress
                ? <ShippingAddress />
                : <br/>
              }
              <Link to="/myaccount"><input onClick={this.props.handleOrderSubmit} className="category_eng payment-confirmation btn" type="submit" value="Complete order"></input></Link>

          </form>
        </div>
      </div>
    )
  }


}

export default PaymentForm;
