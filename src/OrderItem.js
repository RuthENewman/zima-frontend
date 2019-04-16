import React, {Component} from 'react';

class OrderItem extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  amendDate = (createdDate) => {
    let year = createdDate.slice(0, 4)
    let month = createdDate.slice(5, 7)
    let day = createdDate.slice(8, 10)
    return `${day}/${month}/${year}`;
  }

  render() {
    const { amendDate } = this;
    return (
      <div className="order-item-details">    
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
