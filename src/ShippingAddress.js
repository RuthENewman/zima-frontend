import React, {Component} from 'react';

class ShippingAddress extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id="shipping_address">
          <h3 className="category_eng">Shipping Address</h3>
          <label htmlFor="fname">Full Name</label>
          <input type="text" className="category_eng" id="fname" name="firstname" placeholder="Name of recipient"></input>
          <label htmlFor="adr"><i className="fa fa-address-card-o category_eng"></i> Address</label>
          <input type="text" id="adr" className="category_eng" name="address" placeholder="Shipping address"></input>
          <label htmlFor="city"><i className="fa fa-institution category_eng"></i> City</label>
          <input type="text" id="city" className="category_eng" name="city" placeholder="e.g. Moscow"></input>

          <div>
            <div className="category_eng">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" placeholder="e.g. Russia"></input>
            </div>

            <div>
              <label htmlFor="zip">Zip or Post code</label>
              <input type="text" id="post_code" name="post_code" placeholder="Shipping address post or zip code"></input>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default ShippingAddress;
