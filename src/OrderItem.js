import React, {Component} from 'react';

class OrderItem extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className="order-item-details">
        <h3>Order id: {this.props.order.id}<span> Date ordered:</span></h3>
        <div className="category_eng order-item-info">
          <p>{this.props.product.name}</p>
          <p>£{this.props.product.price}</p>
        </div>
        <img className="order-history-image" src={this.props.product.image_url} alt={this.props.product.name}/>
      </div>
    )
  }

}

export default OrderItem;
