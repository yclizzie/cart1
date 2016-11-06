import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import { WebView, View, Dimensions } from 'react-native';
import I18n from 'react-native-i18n';
import { ALLPAY_PAYMENT_URL } from '../../constants/Constants';
import { replaceRoute } from '../../actions/route';
import { getOrderStatus } from '../../actions/main';
import styles from './styles';


class PaymentAllPay extends Component {

  static propTypes = {
    onCloseModal: React.PropTypes.func,
    getOrderStatus: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    orderId: React.PropTypes.number,
    orderStatus: React.PropTypes.string,
    total: React.PropTypes.number,
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.props.getOrderStatus(this.props.orderId);
      if (this.props.orderStatus === '2') {
        clearInterval(timer);
        this.props.onCloseModal();
        this.props.replaceRoute('checkout');
      }
    }, 1000);
  }

  render() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={this.props.onCloseModal}>
            <Icon name="ios-close" />
          </Button>

          <Title>{I18n.t('text_payment')}</Title>

        </Header>

        <Content>
          <View style={{ flex: 1, flexDirection: 'column', height, width }}>
            <WebView
              style={{ marginTop: 10 }}
              injectedJavaScript="document.getElementById('allpayForm').submit();"
              source={{ html: '<!DOCTYPE html><html><body>' +
              '<form id="allpayForm" method="POST" action="' + ALLPAY_PAYMENT_URL + '" target="_self">' +
              '<input type="hidden" name="MerchantID" value="1402123" />' +
              '<input type="hidden" name="AppCode" value="opencart" />' +
              '<input type="hidden" name="MerchantTradeNo" value="' + this.props.orderId + '" />' +
              '<input type="hidden" name="MerchantTradeDate" value="2016/11/01 15:40:18" />' +
              '<input type="hidden" name="TotalAmount" value="' + this.props.total + '" />' +
              '<input type="hidden" name="TradeDesc" value="Red-House 官網" />' +
              '<input type="hidden" name="ItemName" value="衣物類商品‘" />' +
              '<input type="hidden" name="ChoosePayment" value="Credit" />' +
              '<input type="submit" style="visibility:hidden" id="__paymentButton" value="" />' +
              '</form></body></html>' }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}


function bindAction(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    getOrderStatus: orderId => dispatch(getOrderStatus(orderId)),
  };
}

function mapStateToProps(state) {
  return {
    orderId: state.main.orderId,
    orderStatus: state.main.orderStatus,
    total: state.cart.total,
  };
}

export default connect(mapStateToProps, bindAction)(PaymentAllPay);
