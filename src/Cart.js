import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import CompleteOrder from './CompleteOrder';
import Navbar from './Navbar';
let checkoutButton;

class Cart extends Component {
  constructor() {
    super()

    this.state = {
      shoppingCartProducts: [],
      allowCheckout: true,
    }

  }

    setProductsInCart = () => {
      this.setState({
        shoppingCartProducts: this.props.productsInCart
      })
    }

    setCartSize = () => {
      this.props.productsInCart.length >= 1
        ? this.setState({
          cartSize: this.props.productsInCart.length,
        })
      : this.setState({
        cartSize: 0,
      })
    }

    moveToCheckout = () => {
      if (this.props.username !== '' && this.state.cartSize >= 1) {
        checkoutButton = <button className="category_eng cart_button"><Link to="/completeorder" component={CompleteOrder}>Go to checkout</Link></button>
        return checkoutButton;
      } else if (this.props.username !== '' && this.state.cartSize < 1){
        checkoutButton = <button className="category_eng cart_button"><Link to="/allproducts">View products</Link></button>
        return checkoutButton;
      } else if (this.props.username === '' && this.state.cartSize >= 1) {
        checkoutButton = <button className="category_eng cart_button"><Link to="/signin">Sign in to complete your purchase</Link></button>
        return checkoutButton;
      } else {
        checkoutButton = <button className="category_eng cart_button"><Link to="/allproducts">View products</Link></button>
        return checkoutButton;
      }
      }

    totalPrice = () => {
      let totalPriceOfCart = 0;
      this.props.productsInCart.map(
        product => totalPriceOfCart += parseFloat(product.price)
      )
      return parseFloat(totalPriceOfCart.toFixed(2));
    }


  componentDidMount() {
    this.setProductsInCart()
    this.setCartSize()
  }

  render() {
    return (
    <div className="shoppingCartProducts">
      <Navbar username={this.props.username} signout={this.props.signout}/>
      <div className="main_content">
        <div className="shopping-cart checkout_container">
              <h3 id="shopping-cart-header">My Cart
              <span className="price">
              {
              this.state.cartSize !== 0
                    ? <p>{this.state.cartSize}</p>
                    : <p>0</p> }
              </span></h3>
          {
            this.state.cartSize >= 1
              ? this.props.productsInCart.map(
              product =>
            (<CartItem product={product} key={product.id} productsInCart={this.props.productsInCart} removeFromCart={this.props.removeFromCart}/>)
            )
            : <h3 className="category_eng">You have no items in your cart!</h3>
          }
          <hr />
          <h3 id="shopping-cart-total" className="price">Total: <span className="price">£{this.totalPrice()}</span></h3>
          { this.moveToCheckout() }
        </div>
      </div>
    </div>
    )
  }

}

export default Cart;
