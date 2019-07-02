import React from 'react';
import centsToDollar from './helper';

class AddToCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
  }

  render() {
   const productOptions = this.props.products.map(prod => {
     return (
       <option key={prod.id} id={prod.id} price={prod.priceInCents} value={prod.name}>{prod.name}</option>
     )
   })
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="quantityInput">Quantity</label>
            <input 
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="quantity"
              type="number"
              className="form-control"
              id="quantityInput" 
              aria-describedby="quantity" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="productInput">Product</label>
            <select 
              onChange={e => this.setState({ [e.target.name]: {id: e.target.childNodes[e.target.selectedIndex].id, name: e.target.value, priceInCents: parseInt(e.target.childNodes[e.target.selectedIndex].getAttribute('price'))} })}
              name="product"
              className="form-control"
              id="productInput" required>
              <option value="" selected disabled>Select a product...</option>
              {productOptions}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddToCart;

