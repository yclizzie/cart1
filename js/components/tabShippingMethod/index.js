
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Icon, ListItem, List, Thumbnail } from 'native-base';
import { View, Dimensions, ActivityIndicator, Modal } from 'react-native';
import myTheme from '../../themes/base-theme';
import { pushNewRoute } from '../../actions/route';
import { onShippingMethodClick } from '../../actions/main';
import styles from './styles';
import style from '../../themes/base-style';

const thumbnails = {
  flat: 'https://www.red-house.com.tw/catalog/view/theme/default/image/flat.png',
  fami: 'https://www.red-house.com.tw/catalog/view/theme/default/image/fami.png',
  unimart: 'https://www.red-house.com.tw/catalog/view/theme/default/image/unimart.png',
  weight: 'https://www.red-house.com.tw/image/catalog/ems_square.jpg',
};

const paymentmethods = {
  flat: '信用卡',
  fami: '取貨付款',
  unimart: '取貨付款',
  weight: 'Paypal',
};


class TabShippingMethod extends Component {

  static propTypes = {
    onShippingMethodClick: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    shippingmethod: React.PropTypes.string,
    data: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.alert) {
      this.setState({
        modalVisible: false,
      });
    }
  }

  onShippingMethodClick(code, paymentmethod) {
    this.props.onShippingMethodClick(code, paymentmethod);
    this.setState({
      modalVisible: true,
    });
    const timer = setInterval(() => {
      if (this.props.shippingmethod) {
        clearInterval(timer);
        this.setState({
          modalVisible: false,
        });
        this.props.pushNewRoute('shippingaddress');
      }
    }, 200);
  }

  _generateShippingRow(row) {
    return (
      <ListItem button style={styles.shippingMethodRow} key={row.code} onPress={() => this.onShippingMethodClick(row.code, row.paymentmethod)}>
        <View style={[style.flexRow, { justifyContent: 'space-between', paddingRight: 10, alignItems: 'center' }]}>
          <Thumbnail style={{ borderRadius: 0, marginTop: -2 }} source={{ uri: thumbnails[row.key] }} />
          <View style={{ flexDirection: 'column' }}>
            <Text>{row.title}</Text>
            <Text style={{ fontSize: 12 }}>＋ {paymentmethods[row.key]}</Text>
          </View>
          <View style={{ flexDirection: 'column', marginTop: -10 }}>
            <Text style={{ fontSize: 10, color: '#888' }}>物流費</Text>
            <Text>{row.text}</Text>
          </View>
          <Icon name="ios-arrow-forward" />
        </View>
      </ListItem>
    );
  }

  render() {
    const { props: { data } } = this;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
      <Container style={styles.container}>
        <Content theme={myTheme} >
          <Modal animationType={'none'} transparent visible={this.state.modalVisible}>
            <View style={[styles.centering, { height, width, opacity: 90 }]}>
              <ActivityIndicator style={[styles.centering, style.loading]} size="large" />
            </View>
          </Modal>
          <List style={{ marginLeft: -12, marginTop: 30, borderTopWidth: 1, borderColor: '#ACAAAB' }}>
            {data ? data.map(child => this._generateShippingRow(child)) : <View />}
          </List>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    onShippingMethodClick: (code, paymentmethod) => dispatch(onShippingMethodClick(code, paymentmethod)),
  };
}

function mapStateToProps(state) {
  return {
    shippingmethod: state.main.shippingmethod,
    alert: state.main.alert,
  };
}

export default connect(mapStateToProps, bindAction)(TabShippingMethod);
