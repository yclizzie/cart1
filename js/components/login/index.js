
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View, Text} from 'native-base';

import { replaceRoute } from '../../actions/route';
import { loginUser } from '../../actions/user';
import styles from './styles';

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    loginUser: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    telephone: React.PropTypes.string,
    error: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   email: '',
    //   password: '',
    //   error: ''
    // };
  }

  loginUser(email, password) {
    this.props.loginUser(email, password);
  }

  onLoginButtonClick() {
    this.loginUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Text>{this.props.error}</Text>
                <InputGroup style={styles.input}>
                  <Icon name="ios-person" />
                  <Input placeholder="EMAIL" onChangeText={email => this.setState({ email })} />
                </InputGroup>
                <InputGroup style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                     onChangeText={password => this.setState({ password })}
                  />
                </InputGroup>
                <Button style={styles.btn} onPress={() => this.onLoginButtonClick()}>
                  Login
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    loginUser: name => dispatch(loginUser(name)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.firstname,
    email: state.user.email,
    telephone: state.user.telephone,
    error: state.user.error,
  };
}
export default connect(mapStateToProps, bindActions)(Login);
