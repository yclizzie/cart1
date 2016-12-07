
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Footer, Title, Content, Button, Icon, List, ListItem } from 'native-base';
import { Image, View, Dimensions, Modal, Text, WebView, TouchableOpacity } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import I18n from 'react-native-i18n';
import entities from 'entities';
import Hr from 'react-native-hr';
import Carousel from 'react-native-looped-carousel';
import { popRoute, replaceRoute } from '../../actions/route';
import { addToCartClick } from '../../actions/cart';
import { IMAGE_BASE_URL } from '../../constants/Constants';
import { showAlert } from '../../actions/main';
import styles from './styles';
import style from '../../themes/base-style';


class Product extends Component {

  static propTypes = {
    product: React.PropTypes.shape({
      product_id: React.PropTypes.string,
      options: React.PropTypes.arrayOf(React.PropTypes.object),
      name: React.PropTypes.string,
      images: React.PropTypes.arrayOf(React.PropTypes.string),
      price: React.PropTypes.string,
      special: React.PropTypes.string,
      description: React.PropTypes.string,
    }),
    replaceRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    addToCartClick: React.PropTypes.func,
    showAlert: React.PropTypes.func,
    count: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  onSelectColorSize(product_option_value_id) {
    this.setState({
      selectedColorSize: product_option_value_id,
    });
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
      selectedColorSize: null,
    });
  }

  proceedAddToCart() {
    this.props.addToCartClick(this.props.product.product_id, this.props.product.options[0].product_option_id, this.state.selectedColorSize, 1);
  }

  popRoute() {
    this.props.popRoute();
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  addToCart() {
    if (this.state.selectedColorSize) {
      this.setModalVisible(false);
      this.proceedAddToCart();
    } else {
      this.props.showAlert(I18n.t('error_colorsize'));
    }
  }

  render() {
    const { props: { product, count } } = this;
    const width = Dimensions.get('window').width;
    let name = I18n.t('loading');
    let images = ['https://www.red-house.com.tw/image/catalog/logo.png'];
    let price = '';
    let model = '';
    let newprice = '';
    let tag = '';
    let meta_description = '';
    let description = '';
    let options = [];

    if (product) {
      name = product.name;
      images = product.images;
      model = product.model;
      price = product.special ? product.price : null;
      newprice = product.special ? product.special : product.price;
      tag = product.tag;
      description = entities.decodeHTML(product.description);
      meta_description = product.meta_description;
      options = product.options[0].product_option_value;
    }

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" style={style.headerIcon} />
          </Button>

          <Title>
            <Image style={style.headerImg} source={{ uri: 'https://www.red-house.com.tw/image/catalog/logo.png' }} />
          </Title>

          <Button transparent onPress={() => this.replaceRoute('cart')}>
            <View style={style.flexRow}>
              <IconM size={30} name="shopping-basket" style={style.headerIcon} />
              {count > 0 ? <View style={styles.badge}><Text style={styles.badgeText}>{this.props.count}</Text></View> : null}
            </View>
          </Button>
        </Header>

        <Content style={{ marginTop: 10 }}>
          <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
            <Carousel
              delay={2000}
              style={{ width, height: width }}
              autoplay={false}
              pageInfo
            >
              {images.map((image, i) =>
                <View key={i} style={styles.imgcontainer}>
                  <Image style={{ width: width - 10, height: width - 20 }} source={{ uri: image }} />
                </View>
              )}
            </Carousel>
            <View style={{ flex: 1, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <Text adjustsFontSizeToFit style={[style.baseText, styles.productName]}>{name}</Text>
              <View style={[style.flexRow, { paddingBottom: 5 }]}>
              { price ?
                <Text style={[style.baseText, styles.price, styles.textContainer]}>{price}</Text> : <View />
              }
                <Text style={[style.baseText, styles.special, styles.textContainer]}>{newprice}</Text>
              </View>
              { meta_description !== '' ?
                <Text style={[style.baseText, styles.meta_description, styles.textContainer]}>{meta_description}</Text> : <View />
              }
              <View style={{ height: 1, width, backgroundColor: '#b3b3b3', marginBottom: 5, marginTop: 10 }} />
              <View style={[style.flexRow, { paddingBottom: 5, paddingTop: 10 }]}>
                <Text style={[style.baseText, style.baseSmallText, styles.textContainer]}>{I18n.t('color')}</Text>
                <Text style={[style.baseText, style.baseSmallText, styles.textContainer]}>{tag}</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', width }}>
                <Image resizeMode='contain' style={{ width: width - 10, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/d01.jpg' }} />
                <Image resizeMode='contain' style={{ width: width - 10, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/d02.jpg' }} />
                <Image resizeMode='contain' style={{ width: width - 10, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/d03.jpg' }} />
                <Image resizeMode='contain' style={{ width: width - 10, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/d04.jpg' }} />
                <Image resizeMode='contain' style={{ width: width - 10, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/d05.jpg' }} />
                <Image resizeMode='contain' style={{ width, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/' + model + '-size.jpg' }} />
                <Image resizeMode='contain' style={{ width, height: width, marginTop: 15, alignSelf: 'center' }} source={{ uri: IMAGE_BASE_URL + model + '/' + model + '-card.jpg' }} />
              </View>
            </View>
            <View>
              <Modal
                animationType={'slide'}
                transparent
                visible={this.state.modalVisible}
              >
                <View style={[styles.colorsizeModal, { width }]}>
                  <View style={{ padding: 10 }}>
                    <View style={[style.flexRow, { justifyContent: 'space-between' }]}>
                      <Text style={[style.baseText, { fontSize: 16, fontWeight: '400' }]}>{I18n.t('colorsize')}</Text>
                      <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                        <Text style={{ textAlign: 'right' }}><Icon name="ios-close" style={{ fontSize: 20, color: '#333', position: 'relative', top: 0, right: 0 }} /></Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                      <List style={styles.list}>
                        {options.map(option =>
                          <ListItem
                            button
                            key={option.option_value_id}
                            onPress={() => { this.onSelectColorSize(option.product_option_value_id); }}
                            style={[{ width: 100, height: 30, marginBottom: 5, borderRadius: 10, borderWidth: 1 }, this.state.selectedColorSize === option.product_option_value_id ? styles.selected : {}]}
                          >
                            <Text style={{ textAlign: 'center', fontSize: 14 }}>{option.name}</Text>
                          </ListItem>
                        )}
                      </List>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                      <Button small block onPress={() => this.addToCart()} style={style.baseButton}>
                        <Text style={[style.baseText, { color: '#FFF', textAlign: 'center' }]}>{I18n.t('confirm')}</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </Content>
        <Footer style={style.baseFooter}>
          <Button small block onPress={() => this.setModalVisible(true)} style={style.baseButton}>
            <Text style={[style.baseText, { color: '#FFF', textAlign: 'center' }]}>{I18n.t('addToCart')}</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    popRoute: () => dispatch(popRoute()),
    showAlert: error => dispatch(showAlert(error)),
    addToCartClick: (product_id, product_option_id, product_option_value_id, quantity) => dispatch(addToCartClick(product_id, product_option_id, product_option_value_id, quantity)),
  };
}

function mapStateToProps(state) {
  return {
    product: state.main.product,
    index: state.list.selectedIndex,
    count: state.cart.totalCount,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Product);
