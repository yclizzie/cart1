
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListItem, List } from 'native-base';
import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { categoryClick } from '../../actions/main';
import style from '../../themes/base-style';

class Category extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    categoryClick: React.PropTypes.func,
    category: React.PropTypes.shape({
      name: React.PropTypes.string,
      children: React.PropTypes.arrayOf(React.PropTypes.object),
    }),
  }

  onCategoryClick(category) {
    this.props.closeDrawer();
    this.props.categoryClick(category);
    this.props.setIndex(undefined);
    this.navigateTo('itemList');
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.setIndex(undefined);
    this.props.replaceRoute(route);
  }

  _generateCategoryChildrenRow(category) {
    const children = category.children;
    return children.map(child =>
      <ListItem button key={child.category_id} onPress={() => this.onCategoryClick(child)} >
        <Text>{child.name}</Text>
      </ListItem>
    );
  }

  render() {
    const children = this.props.category.children;

    return (
      <List>
        <ListItem itemDivider button style={style.categoryRow} onPress={() => this.onCategoryClick(this.props.category)} >
          <Text style={style.baseText}>{this.props.category.name}</Text>
        </ListItem>
        {children.map(child =>
          <ListItem button style={style.categoryRow} key={child.category_id} onPress={() => this.onCategoryClick(child)} >
            <Text style={style.baseText}>{child.name}</Text>
          </ListItem>
        )}
      </List>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    categoryClick: (id, name) => dispatch(categoryClick(id, name)),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(Category);
