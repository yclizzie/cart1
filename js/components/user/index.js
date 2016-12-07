
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { logoutUser } from '../../actions/user';
import styles from './styles';

class User extends Component {

  static propTypes = {
    logoutUser: React.PropTypes.func,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    telephone: React.PropTypes.string,
  }

  logoutUser() {
    this.props.logoutUser();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Title>{(name) ? this.props.name : 'User'}</Title>

          <Button transparent onPress={() => this.replaceRoute('cart')}>
            <Icon name="ios-cart" />
          </Button>
        </Header>

        <Content padder>
          <Button  style={styles.btn} onPress={() => this.logoutUser()}>
            Logout
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.firstname,
    email: state.user.email,
    telephone: state.user.telephone,
  };
}

export default connect(mapStateToProps, bindAction)(User);
