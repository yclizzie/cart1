
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import { statusBarColor, myTheme } from '../../themes/base-theme';
import TabBar from '../../components/tabBar/';
import Home from '../../components/home/';
import ItemList from '../../components/itemList/';
import styles from './styles';
import renderIf from '../../renderIf';

class Shop extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    content: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    };
  }

  getTitle() {
    if (this.props.content == "itemList") {
      return 'Category';
    } else if (this.props.content == "shop") {
      return 'Home';
    }
  }

  getContent() {
    if (this.props.content == "itemList") {
      return <ItemList />;
    } else if (this.props.content == "shop") {
      return <Home />;
    }
  }

  render() {
    const title = this.getTitle();
    const content = this.getContent();
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
          <Title>{title}</Title>
          <Button transparent onPress={() => this.replaceRoute('cart')}>
            <Icon name="ios-cart" />
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
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.firstname,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Shop);
