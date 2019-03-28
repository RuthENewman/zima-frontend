import React, { Component, Fragment } from 'react';
import ProductsContainer from './ProductsContainer';
import Navbar from './Navbar';

class BrowseAll extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <Fragment>
        <Navbar
        signout={this.props.signout}
        username={this.props.username}
        />
        <ProductsContainer
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          shuffle={this.props.shuffle}
          products={this.props.products}
          productsInCart={this.props.productsInCart}
         />
      </Fragment>
    )
  }


}

export default BrowseAll;
