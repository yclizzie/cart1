
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';
import { closeDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { categoryClick } from '../../actions/main';
import CategoryMenu from '../../components/categoryMenu';
import myTheme from '../../themes/base-theme';
import styles from './style';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    categoryClick: React.PropTypes.func,
    categories: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  onCategoryClick(category) {
    this.props.closeDrawer();
    this.props.categoryClick(category);
    this.navigateTo('itemList');
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceRoute(route);
  }

  render() {
    const categories = this.props.categories;
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} >
            <Text>Blank Page</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('checkout')} >
            <Text>Checkout Page</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('itemList')} >
            <Text>Category Page</Text>
          </ListItem>
          {categories.map(category => <CategoryMenu key={category.category_id} category={category} />
          )}
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    categoryClick: (id, name) => dispatch(categoryClick(id, name)),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
    categories: state.main.categories,
  };
}
export default connect(mapStateToProps, bindAction)(SideBar);
