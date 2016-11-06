
import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import user from './user';
import list from './list';
import products from './products';
import main from './main';
import cart from './cart';
export default combineReducers({

  drawer,
  route,
  user,
  list,
  cart,
  products,
  main,
});
