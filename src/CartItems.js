import React from 'react';
import centsToDollar from './helper';

class CartItems extends React.Component {
  render() {

    let total = 0;
    this.props.items.forEach(item => {
      total += (item.quantity * item.product.priceInCents)
    })
    total = centsToDollar(total);
    const itemsList = this.props.items.map(item => {
      return (
        <div key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-md-8">{item.product.name}</div>
            <div className="col-md-2">{centsToDollar(item.product.priceInCents)}</div>
            <div className="col-md-2">{item.quantity}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          { itemsList }
        </div>
        Total Price: {total}
      </div>
    )
  }
}

export default CartItems;

