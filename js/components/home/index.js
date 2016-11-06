
import React, { Component } from 'react';
import { TouchableOpacity, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Content padder>
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushNewRoute('blankPage', i)}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
          <Picker
  selectedValue='js'
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
  <Picker.Item label="Java" value="java1" />
  <Picker.Item label="JavaScript" value="js1" />
    <Picker.Item label="Java" value="java2" />
  <Picker.Item label="JavaScript" value="js2" />
    <Picker.Item label="Java" value="java3" />
  <Picker.Item label="JavaScript" value="js3" />
    <Picker.Item label="Java" value="java4" />
  <Picker.Item label="JavaScript" value="js4" />
</Picker>
        </Content>
      </Container>
    );
  }
}

 function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
