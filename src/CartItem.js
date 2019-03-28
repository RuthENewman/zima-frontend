import React, {Component} from 'react';

class CartItem extends Component {
  constructor() {
    super()

    this.state = {
      quantity: 1,
    }

  }

  incrementQuantity = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
    })
  }

  render() {
    return (
      <div key={this.props.product.id}>
        <h3 className="category_eng">{this.props.product.name} <span className="price">£{this.props.product.price}</span>
        <br/>
        <label id="quantityLabel" className="category_eng">Quantity:</label>
        <input id="quantityInput" type="number" name="quantity" min="1" value={this.state.quantity} onChange={() => this.incrementQuantity(this.props.product)}></input>
        <button className="category_eng remove_button" onClick={(event) => this.props.removeFromCart(this.props.product)}>Remove from cart</button></h3>
      </div>
    )
  }

}

export default CartItem;
