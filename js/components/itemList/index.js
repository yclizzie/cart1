
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { Container, Thumbnail, Header, Footer, Title, Content, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import TabBar from '../../components/tabBar/';
import styles from './styles';
import { getVisibleProducts } from '../../reducers/products';

class ItemList extends Component {

  static propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    price: React.PropTypes.number,
    inventory: React.PropTypes.number,
  })),
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoadingTail: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
        this._data = [];
        this.setState({
            dataSource: this.getDataSource(this.props.products)
        });
  }

  _renderRow(item) {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: 'https://s.yimg.com/hg/pimg2/a3/27/p034051669171-item-2322xf2x0600x0600-m.jpg'}}/>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        );
    }

    // onEndReached () {
    //     console.log('onEndReached', this.state.isLoadingTail);
    //     if (this.state.isLoadingTail) {
    //         // We're already fetching
    //         return;
    //     }
    //     this.setState({
    //         isLoadingTail: true
    //     });

    //     this.setState({
    //         isLoadingTail: false,
    //         dataSource: this.getDataSource(this.props.products)
    //     });
    // }

    getDataSource(products):ListView.DataSource {
        this._data = this._data.concat(products);
        return this.state.dataSource.cloneWithRows(this._data);
    }

  render() {
    const { props: { name, index, list, products } } = this;

    return (
        <ListView
          dataSource={this.state.dataSource}
          initialListSize={100}
          renderRow={this._renderRow}
          //onEndReached={this.onEndReached.bind(this)}
          contentContainerStyle={styles.list}>
        </ListView>

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
    products: getVisibleProducts(state.products),
  };
}

export default connect(mapStateToProps, bindAction)(ItemList);
