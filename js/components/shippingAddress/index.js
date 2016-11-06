
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Footer, Content, Text, Button, Icon } from 'native-base';
import { View, TouchableOpacity, Modal, Dimensions, ActivityIndicator } from 'react-native';
import I18n from 'react-native-i18n';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { popRoute, replaceRoute } from '../../actions/route';
import { checkout } from '../../actions/main';
import styles from './styles';
import style from '../../themes/base-style';
import ShippingReceiver from '../../components/shippingReceiver';
import ShippingOversea from '../../components/shippingOversea';
import ShippingTW from '../../components/shippingTW';
import ShippingCVS from '../../components/shippingCVS';
import CartItems from '../../components/cartItems';
import PaymentAllPay from '../../components/paymentAllPay';

const buttons = {
  weight: {
    text: '前往付款',
    detail: ' 跳轉至Paypal SSL加密安全付款頁面',
  },
  unimart: {
    text: '送出訂單',
    detail: '',
  },
  fami: {
    text: '送出訂單',
    detail: '',
  },
  flat: {
    text: '前往付款',
    detail: ' 跳轉至綠界科技SSL加密安全付款頁面',
  },
};

const order_status = {
  weight: '0',
  unimart: '2',
  fami: '2',
  flat: '0',
};


class ShippingAddress extends Component {

  static propTypes = {
    totals: React.PropTypes.arrayOf(React.PropTypes.object),
    replaceRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    checkout: React.PropTypes.func,
    orderId: React.PropTypes.number,
    type: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      modalVisible: false,
      paymentModalVisible: false,
    };
  }

  onClosePaymentModal() {
    this.setState({
      paymentModalVisible: false,
    });
  }

  getShippingAddress() {
    switch (this.props.type) {
      case 'weight':
        return <ShippingOversea />;
      case 'unimart':
        return <ShippingCVS type="UNIMART" />;
      case 'fami':
        return <ShippingCVS type="FAMI" />;
      default:
        return <ShippingTW />;
    }
  }

  showCart() {
    this.setState({
      showCart: true,
    });
  }

  hideCart() {
    this.setState({
      showCart: false,
    });
  }

  checkout() {
    this.props.checkout(order_status[this.props.type]);
    this.setState({
      modalVisible: true,
    });
    const timer = setInterval(() => {
      if (this.props.orderId) {
        clearInterval(timer);
        this.setState({
          modalVisible: false,
        });
        if (order_status[this.props.type] === '0') {
          this.setState({
            paymentModalVisible: true,
          });
        } else {
          this.props.replaceRoute('checkout');
        }
      }
    }, 1000);
  }

  render() {
    const shippingaddress = this.getShippingAddress();
    const button = buttons[this.props.type];
    const total = this.props.totals ? this.props.totals[this.props.totals.length - 1] : null;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.props.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>{I18n.t('text_shippingaddress_title')}</Title>
        </Header>
        <Content padder>
          <Modal animationType={'none'} transparent visible={this.state.modalVisible}>
            <View style={[styles.centering, { height, width, opacity: 90 }]}>
              <ActivityIndicator style={[styles.centering, { transform: [{ scale: 1.5 }] }]} size="large" />
            </View>
          </Modal>
          <Modal animationType={'slide'} transparent={false} visible={this.state.paymentModalVisible}>
            <View style={[styles.centering, { height, width }]}>
              <PaymentAllPay type={this.props.type} onCloseModal={() => this.onClosePaymentModal} />
            </View>
          </Modal>
          <ShippingReceiver />
          {shippingaddress}
          {this.state.showCart ?
            <TouchableOpacity onPress={() => this.hideCart()}>
              <View style={[style.flexRow, styles.totalRow]}>
                <Text style={styles.totalTitle}>{total.title}</Text>
                <Text style={[styles.totalTitle, styles.totalText]}>{total.text}</Text>
                <Icon name="ios-arrow-up" style={[styles.totalTitle, { fontSize: 24 }]} />
              </View>
            </TouchableOpacity> :
              <TouchableOpacity onPress={() => this.showCart()}>
                <View style={[style.flexRow, styles.totalRow]}>
                  <Text style={styles.totalTitle}>{total.title}</Text>
                  <Text style={[styles.totalTitle, styles.totalText]}>{total.text}</Text>
                  <Icon name="ios-arrow-down" style={[styles.totalTitle, { fontSize: 24 }]} />
                </View>
              </TouchableOpacity>
          }
          <View>
            {this.state.showCart ? <CartItems /> : <View />}
          </View>
        </Content>
        <Footer style={style.baseFooter}>
          <Button small block onPress={() => this.checkout()} style={style.baseButton}>
            <IconFA name="lock" />
            <Text style={[styles.baseText, { color: '#FFF', textAlign: 'center' }]}> {button.text}</Text>
            <Text style={[styles.baseText, { fontSize: 10, color: '#eee', textAlign: 'center' }]}> {button.detail}</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

function getType(code) {
  if (code.indexOf('weight') !== -1) {
    return 'weight';
  } else if (code.indexOf('unimart') !== -1) {
    return 'unimart';
  } else if (code.indexOf('fami') !== -1) {
    return 'fami';
  }
  return 'flat';
}

function bindAction(dispatch) {
  return {
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    checkout: (order, address) => dispatch(checkout(order, address)),
  };
}

function mapStateToProps(state) {
  return {
    totals: state.cart.totals,
    address: state.main.address,
    orderId: state.main.orderId,
    type: getType(state.main.shippingmethod),
    shippingmethod: state.main.shippingmethod,
    paymentmethod: state.main.paymentmethod,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingAddress);
