
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text } from 'native-base';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import IconFA from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import style from '../../themes/base-style';

class Checkout extends Component {

  static propTypes = {
    orderId: React.PropTypes.string,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={[style.flexRow, { justifyContent: 'center' }]}>
            <IconFA size={30} style={styles.circleIcon} name="check-circle-o" />
            <Text style={styles.headings}>
              {I18n.t('text_checkout_success')}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderId: state.main.orderId,
  };
}

export default connect(mapStateToProps, null)(Checkout);
