
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, View } from 'native-base';
import { Image, TouchableOpacity, Text } from 'react-native';
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

    if (this.props.content === 'shop') {
      return <Home />;
    }

    if (this.props.categoryname) {
      return <ItemList />;
    }

    return <Home />;
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  _onSortClick(type) {

  }

  render() {
    const content = this.getContent(),
          showSortBar = this.props.content !== 'checkout' && this.props.content !== 'shop' && this.props.categoryname;

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
        {showSortBar ?
        <View style={[styles.headerBar, style.flexRow]}>
          <TouchableOpacity onPress={this._onSortClick('VIEWED')}><Text style={styles.sortText}>人氣商品</Text></TouchableOpacity>
          <Text style={[styles.sortText, styles.sortSeparator]}>  |  </Text>
          <TouchableOpacity onPress={this._onSortClick('DATE_ADDED')}><Text style={[styles.sortText, styles.sortTextSelected]}>最新商品</Text></TouchableOpacity>
          <Text style={[styles.sortText, styles.sortSeparator]}>  |  </Text>
          <TouchableOpacity onPress={this._onSortClick('PRICE')}><Text style={styles.sortText}>價格高低</Text></TouchableOpacity>
        </View> : null}
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
