
import React, { Component } from 'react';
import { View } from 'native-base';
import ShippingMethods from '../../components/shippingMethods';
import CartView from '../../components/cartView';
import ShippingAddress from '../../components/shippingAddress';

class Cart extends Component {

  static propTypes = {
    content: React.PropTypes.string,
  }

  getContent() {
    if (this.props.content === 'shippingmethods') {
      return <ShippingMethods />;
    } else if (this.props.content === 'shippingaddress') {
      return <ShippingAddress />;
    }
    return <CartView />;
  }

  render() {
    const content = this.getContent();

    return (
      <View>
        {content}
      </View>


    );
  }
}


export default Cart;
