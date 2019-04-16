import React, {Component} from 'react';
import ProductItem from './ProductItem';
import Navbar from './Navbar';

const baseURL = "https://ancient-retreat-80047.herokuapp.com/api/v1/categories";

class ProductsByTheme extends Component {
  constructor() {
    super()

    this.state = {
      selectedProducts: [],
      shuffledProducts: []
    }
  }

  fetchProductsByTheme = (category) => {
    fetch(`${baseURL}/${category}/products`)
      .then(response => response.json())
      .then(data => this.setState({
        selectedProducts: data
      }))
      .then(this.shuffleProductsByTheme)
  }

  shuffleProductsByTheme = () => {
    this.setState({
      shuffledProducts: this.props.shuffle(this.state.selectedProducts)
    })
  }

  defaultToAllProducts = () =>
  this.setState({
    selectedProducts: this.props.products
  })

  componentDidMount() {
    this.props.selectedCategory !== null
    ? this.fetchProductsByTheme(this.props.selectedCategory)
    : this.defaultToAllProducts()
  }

  render() {
    return (
    <div>
      <Navbar signout={this.props.signout} username={this.props.username}/>
      <div className="product-container">
        <div className="product-list">
        {
          this.state.selectedProducts.map(product => <ProductItem
            key={product.id}
            product={product}
            addToCart={this.props.addToCart}
            productsInCart={this.props.productsInCart}
            />)
        }
        </div>
      </div>
    </div>
    )
  }


}

export default ProductsByTheme;
