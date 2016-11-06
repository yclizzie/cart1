
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { WebView, View, Dimensions } from 'react-native';
import I18n from 'react-native-i18n';
import { getCVS } from '../../actions/main';
import styles from './styles';

const steps = {
  UNIMART: ['text_unimart_step1', 'text_unimart_step2'],
  FAMI: ['text_fami_step1', 'text_fami_step2'],
};

class CVSMap extends Component {

  static propTypes = {
    onCloseModal: React.PropTypes.func,
    address: React.PropTypes.shape({
      address_2: React.PropTypes.string,
    }),
    getCVS: React.PropTypes.func,
    draftId: React.PropTypes.number,
    type: React.PropTypes.string,
  }


  constructor(props) {
    super(props);
    this.state = {
      steps: steps[props.type],
    };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.getCVS();
      if (this.props.address && this.props.address.address_2) {
        clearInterval(timer);
        this.props.onCloseModal();
      }
    }, 1000);
  }

  getCVS() {
    this.props.getCVS();
  }

  render() {
    const thesteps = this.state.steps;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={this.props.onCloseModal}>
            <Icon name="ios-close" />
          </Button>

          <Title>{I18n.t('text_choose_cvs_store')}</Title>

        </Header>

        <Content>
          <View style={styles.stepsContainer}>
            {thesteps.map((step, i) => <Text key={i} style={styles.step}>{I18n.t(step)}</Text>)}
          </View>
          <View style={{ flex: 1, flexDirection: 'column', height, width }}>
            <WebView
              style={{ marginTop: 10 }}
              injectedJavaScript="document.getElementById('allpayForm').submit();"
              source={{ html: '<!DOCTYPE html><html><body>' +
              '<form id="allpayForm" method="POST" action="https://logistics.ecpay.com.tw/Express/map" target="_self">' +
              '<input type="hidden" name="MerchantID" value="1402123" />' +
              '<input type="hidden" name="MerchantTradeNo" value="199" />' +
              '<input type="hidden" name="LogisticsType" value="CVS" />' +
              '<input type="hidden" name="LogisticsSubType" value="' + this.props.type + '" />' +
              '<input type="hidden" name="IsCollection" value="Y" />' +
              '<input type="hidden" name="ExtraData" value="' + this.props.draftId + '" />' +
              '<input type="hidden" name="ServerReplyURL" value="http://www.red-house.com.tw/index.php?route=shipping/allpaylogistic/set_store_info_mobile" />' +
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
    getCVS: () => dispatch(getCVS()),
  };
}

function mapStateToProps(state) {
  return {
    draftId: state.main.draftId,
    address: state.main.address,
  };
}

export default connect(mapStateToProps, bindAction)(CVSMap);
