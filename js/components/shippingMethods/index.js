
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Tabs } from 'native-base';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { popRoute } from '../../actions/route';
import TabShippingMethod from '../../components/tabShippingMethod';
import { loadShippingMethods } from '../../actions/main';
import styles from './styles';
import myTheme from '../../themes/base-theme';

class ShippingMethods extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    loadShippingMethods: React.PropTypes.func,
    shippingmethod: React.PropTypes.string,
    shippingmethods: React.PropTypes.shape({

    }),
  }

  constructor(props) {
    super(props);

    this.state = {
      shippingmethod: props.shippingmethod,
    };
  }

  componentDidMount() {
    this.loadShippingMethods();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      shippingmethod: nextProps.shippingmethod,
    });
  }

  _getShippingResults(shippingmethods) {
    const twresults = [];
    const oversearesults = [];

    for (const key in shippingmethods) {
      if (shippingmethods.hasOwnProperty(key)) {
        const quote = shippingmethods[key].quote;
        if (key.indexOf('weight') !== -1) {
          for (const k in quote) {
            if (quote.hasOwnProperty(k)) {
              oversearesults.push({ ...quote[k], key: 'weight', paymentmethod: shippingmethods[key].paymentmethod });
            }
          }
        } else {
          for (const k in quote) {
            if (quote.hasOwnProperty(k)) {
              twresults.push({ ...quote[k], key: k, paymentmethod: shippingmethods[key].paymentmethod });
            }
          }
        }
      }
    }

    return { twresults, oversearesults };
  }

  popRoute() {
    this.props.popRoute();
  }

  loadShippingMethods() {
    this.props.loadShippingMethods();
  }

  render() {
    const shippingmethods = this._getShippingResults(this.props.shippingmethods);
    const twresults = shippingmethods.twresults;
    const oversearesults = shippingmethods.oversearesults;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>{I18n.t('text_shippingmethods_title')}</Title>
        </Header>

        <Content theme={myTheme} style={{ marginTop: -20 }}>
          <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }} />
          <Tabs>
            <TabShippingMethod tabLabel="Taiwan" data={twresults} />
            <TabShippingMethod tabLabel="Overseas" data={oversearesults} />
          </Tabs>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: () => dispatch(popRoute()),
    loadShippingMethods: () => dispatch(loadShippingMethods()),
  };
}

function mapStateToProps(state) {
  return {
    shippingmethod: state.main.shippingmethod,
    shippingmethods: state.main.shippingmethods,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingMethods);
