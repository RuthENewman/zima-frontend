import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import BrowseAll from './BrowseAll';
import ComingSoon from './ComingSoon';
import CheckoutForm from './CheckoutForm';
import BrowsingByTheme from './BrowsingByTheme';
import Cart from './Cart';
import SignInForm from './SignInForm';
import ProductsByTheme from './ProductsByTheme';
import OrderHistory from './OrderHistory';
import CreateAccount from './CreateAccount';
import CompleteOrder from './CompleteOrder';

class Main extends Component {


  render() {
    return (
    <Fragment>
      <Route exact path="/" component={() =>
        <HomePage
        toggleShowingSideBar={this.props.toggleShowingSideBar}
        closeSideBar={this.props.closeSideBar}
        sideBar={this.props.sideBar}
        username={this.props.username}
        signout={this.props.signout}
        />} />
      <Route exact path="/about" component={() =>
        <About
        username={this.props.username}
        signout={this.props.signout}
        />}
        />
      <Route exact path="/signin"
        component={(routerProps) => <SignInForm
          username={this.props.username}
          signout={this.props.signout}
          signin={this.props.signin} {...routerProps}/>}/>
      <Route exact path="/allproducts" component={() => <BrowseAll
        onUpdate={() => window.scrollTo(0, 0)
        products={this.props.products}
        productsInCart={this.props.productsInCart}
        addToCart={this.props.addToCart}
        shuffle={this.props.shuffle}
        removeFromCart={this.props.removeFromCart}
        username={this.props.username}
        signout={this.props.signout}
        />} />
      <Route exact path="/allbytheme"
        onUpdate={() => window.scrollTo(0, 0)
        component={() => <BrowsingByTheme
        selectCategory={this.props.selectCategory}
        selectedCategory={this.props.selectedCategory}
        username={this.props.username}
        signout={this.props.signout}
        /> }/>
      <Route path="/bytheme/"
        component={() => <ProductsByTheme
          products={this.props.products}
          productsInCart={this.props.productsInCart}
          addToCart={this.props.addToCart}
          selectedCategory={this.props.selectedCategory}
          shuffle={this.props.shuffle}
          username={this.props.username}
          signout={this.props.signout}
          />}
        />
      <Route exact path="/comingsoon" component={() => <ComingSoon
        username={this.props.username}
        signout={this.props.signout}
        />} />
      <Route exact path="/checkoutform" component={() => <CheckoutForm
        username={this.props.username}
        signout={this.props.signout}
        />} />
      <Route exact path="/shoppingcart" component={() =>
        <Cart
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
        username={this.props.username}
        signout={this.props.signout}
        />} />
      <Route exact path="/myaccount"
      component={routerProps => <OrderHistory username={this.props.username} signout={this.props.signout} {...routerProps} />} />
      <Route exact path="/createaccount" component={(routerProps) => <CreateAccount
        username={this.props.username}
        signout={this.props.signout}
        {...routerProps}
        />}/>
      <Route exact path="/completeorder" component={(routerProps) =>
        <CompleteOrder
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
        username={this.props.username}
        signout={this.props.signout}
        {...routerProps}
        />} />
    </Fragment>
    )
  }


}

export default Main;
