
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Text, View } from 'native-base';
import styles from './styles';
import style from '../../themes/base-style';
import { getProductsByProductIds } from '../../reducers/products';
import { productClick } from '../../actions/main';
import { replaceRoute } from '../../actions/route';

class ItemList extends Component {

  static propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.object),
    productClick: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
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
    this.props.replaceRoute(route);
  }

  _renderRow(item) {
    const width = Dimensions.get('window').width;
    if (item) {
      return (
        <View key={item.product_id} style={Object.assign({ width: (width - 10) * 0.5, height: ((width - 10) * 0.5) + 60 }, StyleSheet.flatten(styles.item))}>
          <TouchableHighlight onPress={() => this.onProductClick(item.product_id)}>
            <Image style={Object.assign({ width: (width - 10) * 0.5, height: (width - 10) * 0.5 }, StyleSheet.flatten(styles.image))} source={{ uri: item.image }} />
          </TouchableHighlight>
          <Text style={[style.baseText, styles.text]}>{item.name}</Text>
          <View style={[style.flexRow, { paddingBottom: 5, alignSelf: 'center' }]}>
            <Text style={[style.baseText, styles.price]} /* eslint-disable */>{item.price}  </Text /* eslint-enable */>
            <Text style={[style.baseText, styles.special]} /* eslint-disable */>  {item.special}</Text /* eslint-enable */>

          </View>
        </View>
      );
    }
    return null;
  }

  render() {
    const { props: { products } } = this;

    return (
      <View style={style.flexRow}>
        {products.map(product => this._renderRow(product)
        )}
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    productClick: id => dispatch(productClick(id)),
    replaceRoute: route => dispatch(replaceRoute(route)),

  };
}

function mapStateToProps(state) {
  return {
    category: state.main.category,
    products: getProductsByProductIds(state.products, state.main.category.products),
  };
}

export default connect(mapStateToProps, bindAction)(ItemList);
