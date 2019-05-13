import React, {Component} from 'react';
import ProductsList from './ProductsList';

class ProductsContainer extends Component {

  render() {
    return(
      <div className="product-container">
        <ProductsList
          shuffle={this.props.shuffle}
          products={this.props.products}
          addToCart={this.props.addToCart}
          productsInCart={this.props.productsInCart}
          />
      </div>
    )

  }

}

export default ProductsContainer;
