
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, View } from 'native-base';
import { Image } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { openDrawer } from '../../actions/drawer';
import { pushNewRoute } from '../../actions/route';
import { myTheme } from '../../themes/base-theme';
import Home from '../../components/home/';
import Checkout from '../../components/checkout';
import ItemList from '../../components/itemList/';
import styles from './styles';
import style from '../../themes/base-style';

class Shop extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    categoryname: React.PropTypes.string,
    content: React.PropTypes.string,
    count: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
    };
  }

  getContent() {
    if (this.props.content === 'checkout') {
      return <Checkout />;
    }

    if (this.props.categoryname) {
      return <ItemList />;
    }

    return <Home />;
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    const content = this.getContent();

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" style={{ color: '#5C5C5C' }} />
          </Button>
          <Title>
            <Image style={style.headerImg} source={{ uri: 'https://www.red-house.com.tw/image/catalog/logo.png' }} />
          </Title>
          <Button transparent onPress={() => this.pushNewRoute('cart')}>
            <View style={style.flexRow}>
              <IconM size={30} color="#5C5C5C" name="shopping-basket" />
              {this.props.count > 0 ? <View style={styles.badge}><Text style={styles.badgeText}>{this.props.count}</Text></View> : null}
            </View>
          </Button>
        </Header>
        <Content>
          {content}
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
    categoryname: state.main.category.name,
    count: state.cart.totalCount,
  };
}

export default connect(mapStateToProps, bindAction)(Shop);
