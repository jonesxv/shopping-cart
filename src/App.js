import React from 'react';
import './CartItems';
import CartItems from './CartItems';
import AddToCart from './AddToCart';
import { isTSMappedType } from '@babel/types';

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

const CartHeader = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Shopping Cart</a>
    </nav>
  )
}

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {props.copyright}</a>
    </nav>
  )
}

class App extends React.Component {
  state = {
    items: cartItemsList,
    products: products
  }
  
  addItem = (item) => {
    const items = this.state.items
    const newItem = {
      id: items.length + 1,
      product: {
        id: item.product.id,
        name: item.product.name,
        priceInCents: item.product.priceInCents
      },
      quantity: item.quantity
    }
    items.push(newItem);
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems items={this.state.items} />
        <AddToCart addItem={this.addItem} products={this.state.products} />
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
