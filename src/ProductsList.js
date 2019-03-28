import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shuffledProducts: this.props.shuffle(this.props.products)
    }

  }

  render() {

    return (
      <div className="product-list">
        {
          this.props.products.map(product => <ProductItem
            key={product.id}
            product={product}
            addToCart={this.props.addToCart}
            productsInCart={this.props.productsInCart}
            />)
        }
      </div>
    )
  }

}

export default ProductsList;
