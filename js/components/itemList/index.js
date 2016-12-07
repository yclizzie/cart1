
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableHighlight, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View, Header } from 'native-base';
import styles from './styles';
import style from '../../themes/base-style';
import { getProductsByProductIds } from '../../reducers/products';
import { productClick } from '../../actions/main';
import { pushNewRoute } from '../../actions/route';

class ItemList extends Component {

  static propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.object),
    productClick: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoadingTail: false,
    };
  }

  onProductClick(id) {
    this.props.productClick(id);
    this.navigateTo('product');
  }

  navigateTo(route) {
    this.props.pushNewRoute(route);
  }

  _renderRow(item) {
    const width = Dimensions.get('window').width;

    if (item) {
      const newprice = item.special ? item.special : item.price;
      const price = item.special ? item.price : null;
      return (
        <View key={item.product_id} style={Object.assign({ width: (width - 10) * 0.5, height: ((width - 10) * 0.5) + 60 }, StyleSheet.flatten(styles.item))}>
          <TouchableHighlight onPress={() => this.onProductClick(item.product_id)}>
            <Image style={Object.assign({ width: (width - 10) * 0.5, height: (width - 10) * 0.5 }, StyleSheet.flatten(styles.image))} source={{ uri: item.image }} />
          </TouchableHighlight>
          <Text style={[style.baseText, styles.text]}>{item.name}</Text>
          <View style={[style.flexRow, { paddingBottom: 5, alignSelf: 'center' }]}>
            { price ? <Text style={[style.baseText, styles.price]} /* eslint-disable */>{price}   </Text /* eslint-enable */> : null }
            <Text style={[style.baseText, styles.special]} /* eslint-disable */>{newprice}</Text /* eslint-enable */>

          </View>
        </View>
      );
    }
    return null;
  }

  render() {
    const { props: { products } } = this;

    return (
      <View>
      <View style={[style.flexRow, {marginTop: -20}]}>
        {products.map(product => this._renderRow(product)
        )}
      </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    productClick: id => dispatch(productClick(id)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),

  };
}

function mapStateToProps(state) {
  return {
    category: state.main.category,
    products: getProductsByProductIds(state.products, state.main.category.products),
  };
}

export default connect(mapStateToProps, bindAction)(ItemList);
