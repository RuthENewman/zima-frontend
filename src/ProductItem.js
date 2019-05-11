import React, { Component } from 'react';

class ProductItem extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    const {product} = this.props
    return (
      <>
        <div className="product-item">
          <h3 className="product-item-name">{product.name}</h3>
          <img src={product.image_url} alt={product.name} />
          <h3>£{product.price}</h3>
          <div className="product_overlay">
            <div className="product-text">
                <h3 className="category_eng">{product.description}</h3>
                  <button onClick={(event) => this.props.addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
    </>
    )
  }

}

export default ProductItem;
