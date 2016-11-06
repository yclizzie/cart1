
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, InputGroup, Input } from 'native-base';
import { View, ActivityIndicator } from 'react-native';
import I18n from 'react-native-i18n';
import { onEmailEntered, loginUser, onFillUserForm } from '../../actions/user';
import styles from './styles';
import style from '../../themes/base-style';

class ShippingReceiver extends Component {

  static propTypes = {
    onFillUserForm: React.PropTypes.func,
    onEmailEntered: React.PropTypes.func,
    loginUser: React.PropTypes.func,
    showlogin: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.email,
      name: nextProps.name,
      telephone: nextProps.telephone,
      loading: false,
    });
  }

  onEmailEntered(email) {
    if (email) {
      this.setState({
        loading: true,
      });
      this.props.onEmailEntered(email);
    }
  }

  onPasswordEntered(password) {
    this.setState({
      password,
    });
  }

  onLogin() {
    this.setState({
      loading: true,
    });
    this.props.loginUser(this.state.email, this.state.password);
  }

  onChangeName(name) {
    this.setState({
      name,
    });
  }

  onChangeTelephone(telephone) {
    this.setState({
      telephone,
    });
  }

  onTelephoneEntered(telephone) {
    this.props.onFillUserForm('telephone', telephone);
  }

  onNameEntered(name) {
    this.props.onFillUserForm('name', name);
  }

  render() {
    const { props: { showlogin } } = this;
    return (
      <View>
        <View style={[style.flexRow, { borderBottomWidth: 0.8, borderColor: '#D9D5DC', padding: 10 }]}>
          <Icon name="md-mail" style={{ color: '#F57F7F', fontSize: 26, marginLeft: -5, marginTop: 5, paddingRight: 3 }} />
          <Input onEndEditing={e => this.onEmailEntered(e.nativeEvent.text)} placeholder={I18n.t('text_email')} />
          <ActivityIndicator animating={this.state.loading} style={[styles.centering]} />
        </View>
        {showlogin ?
          <View>
            <InputGroup style={{ padding: 10 }}>
              <Icon name="md-lock" style={{ color: '#F57F7F' }} />
              <Input secureTextEntry onChangeText={text => this.onPasswordEntered(text)} placeholder={I18n.t('text_password')} />
            </InputGroup>
            <View style={{ paddingTop: 10 }}>
              <Button small block onPress={() => this.onLogin()} style={{ backgroundColor: '#F57F7F' }}>{I18n.t('text_login')}</Button>
            </View>
          </View> : <View />}
        <InputGroup style={{ padding: 10 }}>
          <Icon name="md-person" style={{ color: '#F57F7F' }} />
          <Input value={this.state.name} onEndEditing={e => this.onNameEntered(e.nativeEvent.text)} onChangeText={text => this.onChangeName(text)} placeholder={I18n.t('text_name')} />
        </InputGroup>
        <InputGroup style={{ padding: 10 }}>
          <Icon name="md-call" style={{ color: '#F57F7F' }} />
          <Input value={this.state.telephone} onEndEditing={e => this.onTelephoneEntered(e.nativeEvent.text)} onChangeText={text => this.onChangeTelephone(text)} placeholder={I18n.t('text_telephone')} />
        </InputGroup>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    onEmailEntered: email => dispatch(onEmailEntered(email)),
    onFillUserForm: (key, value) => dispatch(onFillUserForm(key, value)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.firstname,
    telephone: state.user.telephone,
    email: state.user.email,
    showlogin: state.user.existinguser && !state.user.customer_id,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingReceiver);
