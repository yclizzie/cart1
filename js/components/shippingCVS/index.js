
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardItem, Icon, Thumbnail } from 'native-base';
import { View, Text, Dimensions, Modal } from 'react-native';
import I18n from 'react-native-i18n';
import { chooseCVS } from '../../actions/main';
import styles from './styles';
import CvsMap from '../../components/cvsMap';

const thumbnails = {
  FAMI: 'https://www.red-house.com.tw/catalog/view/theme/default/image/fami.png',
  UNIMART: 'https://www.red-house.com.tw/catalog/view/theme/default/image/unimart.png',
};

const routes = {
  FAMI: 'cvsmapfami',
  UNIMART: 'cvsmapunimart',
};

class ShippingCVS extends Component {

  static propTypes = {
    type: React.PropTypes.string,
    chooseCVS: React.PropTypes.func,
    address: React.PropTypes.shape({
      address_2: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      route: routes[props.type],
      thumbnail: thumbnails[props.type],
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.setState({
        route: routes[nextProps.type],
        thumbnail: thumbnails[nextProps.type],
      });
    }
  }

  onCloseModal() {
    this.setState({
      modalVisible: false,
    });
  }

  showMap() {
    this.props.chooseCVS(this.props.type);
    this.setState({
      modalVisible: true,
    });
  }

  render() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
      <View>
        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
          <CardItem button style={{ borderTopWidth: 0, borderBottomWidth: 2, borderColor: '#666' }} onPress={() => { this.showMap(); }}>
            <Thumbnail style={{ borderRadius: 0, marginTop: 2 }} source={{ uri: this.state.thumbnail }} />
            <Text style={{ marginTop: 2 }}>{this.props.address && this.props.address.address_2 ? this.props.address.address_2 : I18n.t('text_choose_cvs_store')}</Text>
            <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: '#666' }} />
          </CardItem>
        </View>
        <View>
          <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible}>
            <View style={[styles.centering, { height, width }]}>
              <CvsMap type={this.props.type} onCloseModal={this.onCloseModal.bind(this)} />
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    chooseCVS: type => dispatch(chooseCVS(type)),
  };
}

function mapStateToProps(state) {
  return {
    address: state.main.address,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingCVS);
