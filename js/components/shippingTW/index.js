
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, InputGroup, Input, Thumbnail } from 'native-base';
import { View, Dimensions } from 'react-native';
import I18n from 'react-native-i18n';
import { onZipcodeEntered, onFillAddressForm } from '../../actions/main';
import styles from './styles';
import style from '../../themes/base-style';

class ShippingTW extends Component {

  static propTypes = {
    onZipcodeEntered: React.PropTypes.func,
    onFillAddressForm: React.PropTypes.func,
    zipcode: React.PropTypes.string,
    zonename: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      zipcode: props.zipcode,
    };
  }

  onZipcodeEntered(text) {
    this.props.onFillAddressForm('country', '206'/* Taiwan */);
    this.props.onZipcodeEntered(text);
  }

  onZipcodeChanged(text) {
    this.setState({
      zipcode: text,
    });
  }

  onAddressChanged(text) {
    this.setState({
      address: text,
    });
    this.props.onFillAddressForm('address', text);
  }


  render() {
    const width = Dimensions.get('window').width;

    return (
      <View>
        <View style={[style.flexRow, styles.zoneRow]}>
          <Thumbnail style={{ borderRadius: 0, marginLeft: -5, marginTop: 5 }} source={{ uri: 'https://www.red-house.com.tw/catalog/view/theme/default/image/flat.png' }} />
          <View style={{ width: width / 3 }}>
            <Input keyboardType="numeric" value={this.state.zipcode} onChangeText={text => this.onZipcodeChanged(text)} onEndEditing={e => this.onZipcodeEntered(e.nativeEvent.text)} placeholder={I18n.t('text_zipcode')} />
          </View>
          <View>
            <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
              {this.props.zonename || I18n.t('text_zone')}
            </Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: '#666' }}>
          <InputGroup style={{ padding: 10 }}>
            <Input onChangeText={text => this.onAddressChanged(text)} placeholder={I18n.t('text_address')} />
          </InputGroup>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    onFillAddressForm: (key, value) => dispatch(onFillAddressForm(key, value)),
    onZipcodeEntered: zipcode => dispatch(onZipcodeEntered(zipcode)),
  };
}

function mapStateToProps(state) {
  return {
    zipcode: state.main.address.zipcode,
    zonename: state.main.address.zonename,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingTW);
