'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/login/';
import Shop from '../../components/shop/';
import BlankPage from '../../components/blankPage';
import Cart from '../../components/cart';
import Icon from 'react-native-vector-icons/Ionicons';
import { pushNewRoute } from '../../actions/route';

var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  static propTypes = {
    setIndex: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    count: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.tab,
      presses: 0
    };
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  // state = {
  //   selectedTab: 'blueTab',
    // notifCount: 0,
    // presses: 0,
  // };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#888"
        tintColor="#666"
        barTintColor="#eee">
        <Icon.TabBarItem
          title="Shop"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          iconColor="#888"
          renderAsOriginal={true}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Shop content={this.props.content}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Search"
          iconName="ios-search-outline"
          selectedIconName="ios-search"
          iconColor="#888"
          renderAsOriginal={true}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}>
         <BlankPage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Cart"
          iconName="ios-basket-outline"
          selectedIconName="ios-basket"
          iconColor="#888"
          renderAsOriginal={true}
          badge={this.props.count > 0 ? this.props.count : undefined}
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}>
         <Cart content={this.props.content}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Account"
          iconColor="#888"
          renderAsOriginal={true}
          iconName="ios-contact-outline"
          selectedIconName="ios-contact"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}>
          <Login />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

function bindAction(dispatch) {
  return {
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
    count: state.cart.totalCount
  };
}


var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

export default connect(mapStateToProps, bindAction)(TabBar);