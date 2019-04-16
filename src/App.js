import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import API from './API';


const productsURL = "https://zima-backend-api.herokuapp.com/api/v1/products";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      productsInCart: [],
      selectedCategory: null,
      username: '',
      currentUser: {},
      sideBar: false
    }

  }

  shuffle(array) {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({
      username: user.first_name
    })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({
      username: ''
    })
  }

  toggleShowingSideBar = () => {
    this.setState({
      sideBar: !this.state.sideBar
    })
  }

  closeSideBar = () => {
    this.setState({
      sideBar: false,
    })
  }

  fetchProducts() {
    fetch(productsURL)
      .then(response => response.json())
      .then((products) => this.setState({
        products: products
      }))
  }

  componentDidMount() {
    this.fetchProducts()
    if (localStorage.getItem('token')) {
      API.validate()
        .then(data => {
          if (data.error) {
            this.signout()
          } else {
            this.signin(data)
            this.props.history.push('/myaccount')
          }
        })
    }

  }

  addToCart = (product) => {
    this.setState({
      productsInCart: [...this.state.productsInCart, product]
    })
    alert('Product added to cart!');
    return false;
  }

  removeFromCart = product => {
    this.setState({
      productsInCart: this.state.productsInCart.filter(cartProduct => cartProduct.id !== product.id)
    })
  }

  selectCategory = category => {
    this.setState({
      selectedCategory: category,
    })
  }

  deselectCategory = () => {
    this.setState({
      selectedCategory: null,
    })
  }

  render() {
    return (
      <>
          <Main
          shuffle={this.shuffle}
          products={this.state.products}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          productsInCart={this.state.productsInCart}
          selectCategory={this.selectCategory}
          selectedCategory={this.state.selectedCategory}
          deselectCategory={this.deselectCategory}
          signin={this.signin}
          signout={this.signout}
          username={this.state.username}
          toggleShowingSideBar={this.toggleShowingSideBar}
          closeSideBar={this.closeSideBar}
          sideBar={this.state.sideBar}
          />
        </>
    );
  }
}

export default withRouter(App);
