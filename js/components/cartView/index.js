
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Footer, Title, Content, Button, Icon, Card, CardItem, View, InputGroup, Input } from 'native-base';
import { Image, TouchableOpacity, Alert, TouchableHighlight, Dimensions, Text } from 'react-native';
import I18n from 'react-native-i18n';
import Totals from '../../components/totals';
import { pushNewRoute } from '../../actions/route';
import { onApplyCoupon, onApplyVoucher, onAlertClick, productClick } from '../../actions/main';
import { addToCartClick, onRemoveProductClick, loadCartProductsData } from '../../actions/cart';
import styles from './styles';
import style from '../../themes/base-style';
import cartStyle from '../../components/cartItems/styles';

class Cart extends Component {

  static propTypes = {
    productClick: React.PropTypes.func,
    loadCartProductsData: React.PropTypes.func,
    addToCartClick: React.PropTypes.func,
    onRemoveProductClick: React.PropTypes.func,
    onApplyCoupon: React.PropTypes.func,
    onAlertClick: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    onApplyVoucher: React.PropTypes.func,
    alert: React.PropTypes.string,
    products: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  componentDidMount() {
    this.loadCartProductsData();
  }

  onProductClick(id) {
    this.props.productClick(id);
    this.props.pushNewRoute('product');
  }

  onQuantityChange(product_id, product_option_id, product_option_value_id, increment) {
    this.props.addToCartClick(product_id, product_option_id, product_option_value_id, increment);
  }

  onRemoveProductClick(cart_id) {
    this.props.onRemoveProductClick(cart_id);
  }

  onApplyCoupon() {
    this.props.onApplyCoupon(this.state.coupon);
  }

  onNextClick() {
    this.props.pushNewRoute('shippingmethods');
  }

  onApplyVoucer() {
    this.props.onApplyVoucher(this.state.voucher);
  }

  loadCartProductsData() {
    this.props.loadCartProductsData();
  }

  _onAlertClick() {
    this.loadCartProductsData();
    this.props.onAlertClick();
  }

  _onCouponTextChange(text) {
    this.setState({
      coupon: text,
    });
  }

  _onVoucherTextChange(text) {
    this.setState({
      voucher: text,
    });
  }


  render() {
    const width = Dimensions.get('window').width;
    const { props: { products, alert } } = this;

    if (alert) {
      Alert.alert(
        '',
        alert,
        [{ text: 'OK', onPress: () => this._onAlertClick() }]
      );
    }

    return (
      <Container style={styles.container}>
        <Header>
          <Title>{I18n.t('shopping_cart')}</Title>
        </Header>

        <Content padder>
          {products.length > 0 ?
            /* eslint-disable */
            <Card
            /* eslint-enable */
              dataArray={products}
              renderRow={product =>
                <CardItem>
                  <View style={style.flexRow}>
                    <TouchableHighlight onPress={() => this.onProductClick(product.product_id)}>
                      <Image style={cartStyle.cartThumbnail} source={{ uri: product.image }} />
                    </TouchableHighlight>
                    <View>
                      <View style={[style.flexRow, { justifyContent: 'space-between' }]}>
                        <Text style={[cartStyle.elementContainer, cartStyle.cartProductName]}>{product.name}</Text>
                        <TouchableOpacity onPress={() => this.onRemoveProductClick(product.cart_id)}>
                          <Text style={{ textAlign: 'right' }}><Icon name="ios-close" style={style.closeIcon} /></Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={[cartStyle.elementContainer, cartStyle.cartColorSizeLabel]}>{I18n.t('colorsize_label') + product.option[0].value}</Text>
                      <View style={[style.flexRow, cartStyle.elementContainer]}>
                        <Text style={cartStyle.cartQuantityLabel}>{I18n.t('quantity_label')}</Text>
                        <TouchableOpacity onPress={() => this.onQuantityChange(product.product_id, product.option[0].product_option_id, product.option[0].product_option_value_id, -1)}>
                          <Icon name="ios-remove" style={styles.quantityIcon} />
                        </TouchableOpacity>
                        <Text style={cartStyle.cartQuantity}>{product.quantity}</Text>
                        <TouchableOpacity onPress={() => this.onQuantityChange(product.product_id, product.option[0].product_option_id, product.option[0].product_option_value_id, 1)}>
                          <Icon name="ios-add" style={styles.quantityIcon} />
                        </TouchableOpacity>
                      </View>
                      <View style={[style.flexRow, cartStyle.elementContainer, { justifyContent: 'space-between' }]}>
                        <Text style={cartStyle.cartProductTotal}>{product.total}</Text>
                        <Text style={cartStyle.cartProductSpecial}>{product.special_total}</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>
            /* eslint-disable */
              }>
            /* eslint-enable */
            </Card> : <Text style={styles.emptyCart}>{I18n.t('empty_cart')}</Text>}
          {products.length > 0 ?
            <View style={[style.flexRow, { justifyContent: 'space-between', paddingTop: 10 }]}>
              <InputGroup borderType="regular">
                <Input style={{ width: width - 80 }} placeholder={I18n.t('coupon_label')} onChangeText={text => this._onCouponTextChange(text)} />
              </InputGroup>
              <TouchableOpacity style={{ width: 30, paddingTop: 5 }} onPress={() => this.onApplyCoupon()}>
                <Icon name="ios-checkmark-circle-outline" style={styles.applyButton} />
              </TouchableOpacity>
            </View>
          : null}
          {products.length > 0 ?
            <View style={[style.flexRow, { justifyContent: 'space-between', paddingTop: 10 }]}>
              <InputGroup borderType="regular">
                <Input style={{ width: width - 80 }} placeholder={I18n.t('voucher_label')} onChangeText={text => this._onVoucherTextChange(text)} />
              </InputGroup>
              <TouchableOpacity style={{ width: 30, paddingTop: 5 }} onPress={() => this.onApplyVoucer()}>
                <Icon name="ios-checkmark-circle-outline" style={styles.applyButton} />
              </TouchableOpacity>
            </View>
          : null}
          {products.length > 0 ? <Totals /> : null}
        </Content>
        {products.length > 0 ?
          <Footer style={styles.footer}>
            <Button small block onPress={() => this.onNextClick()} style={style.baseButton}>
              <Text style={[style.baseText, styles.buttonText]}>{I18n.t('next')}</Text>
            </Button>
          </Footer> : <View />}
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    onAlertClick: () => dispatch(onAlertClick()),
    productClick: id => dispatch(productClick(id)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    onApplyCoupon: coupon => dispatch(onApplyCoupon(coupon)),
    onApplyVoucher: voucher => dispatch(onApplyVoucher(voucher)),
    loadCartProductsData: () => dispatch(loadCartProductsData()),
    onRemoveProductClick: cart_id => dispatch(onRemoveProductClick(cart_id)),
    addToCartClick: (product_id, product_option_id, product_option_value_id, quantity) => dispatch(addToCartClick(product_id, product_option_id, product_option_value_id, quantity)),
  };
}

function mapStateToProps(state) {
  // let cart_products = state.main.cart.products,
  //     cart_product_quanitiy = state.main.cart.productQuantiy,
  //     product_ids = [],
  //     results = [];
  //     items = [];

  // cart_products.map(p => product_ids.push(p.product_id));
  // items = getProductsByProductIds(state.products, product_ids);

  // //Mixin selected product option
  // items.map(function(item, i) {
  //   let quantity = cart_product_quanitiy[cart_products[i].product_id + cart_products[i].product_option_value_id],
  //       result =  Object.assign({}, item, cart_products[i], {quantity: quantity});
  //   if (quantity > 0) {
  //       results.push(result);
  //   }
  // });

  return {
    products: state.cart.products,
    alert: state.main.alert,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Cart);
