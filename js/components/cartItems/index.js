
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, View } from 'native-base';
import { Image, Text } from 'react-native';
import I18n from 'react-native-i18n';
import Totals from '../../components/totals';
import style from '../../themes/base-style';
import styles from './styles';

class CartItems extends Component {

  static propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { props: { products } } = this;

    return (
      <View style={styles.cartContainer}>
        <Card
          dataArray={products}
          renderRow={product =>
            <CardItem>
              <View style={style.flexRow}>
                <Image style={styles.cartThumbnail} source={{ uri: product.image }} />
                <View>
                  <View style={[style.flexRow, { justifyContent: 'space-between' }]}>
                    <Text style={[styles.elementContainer, styles.cartProductName]}>{product.name}</Text>
                  </View>
                  <Text style={[styles.elementContainer, styles.cartColorSizeLabel]}>{I18n.t('colorsize_label') + product.option[0].value}</Text>
                  <View style={[style.flexRow, styles.elementContainer]}>
                    <Text style={styles.cartQuantityLabel}>{I18n.t('quantity_label')}</Text>
                    <Text style={styles.cartQuantity}>{product.quantity}</Text>
                  </View>
                  <View style={[style.flexRow, styles.elementContainer, { justifyContent: 'space-between' }]}>
                    <Text style={styles.cartProductTotal}>{product.total}</Text>
                    <Text style={styles.cartProductSpecial}>{product.special_total}</Text>
                  </View>
                </View>
              </View>
            </CardItem>
        /* eslint-disable */
          }>
        /* eslint-enable */
        </Card>
        <Totals />
      </View>

    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.cart.products,
  };
}

export default connect(mapStateToProps, null)(CartItems);
