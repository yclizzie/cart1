
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  cartProductTotal:{
    letterSpacing: 1,
    fontSize: 16,
    lineHeight: 16,
    color: "#a8a8a8",
    textDecorationLine: 'line-through'
  },
  cartProductSpecial:{
    letterSpacing: 1,
    color: "#666"
  },
  elementContainer: {
    paddingLeft: 10,
    paddingTop: 5
  },
  cartThumbnail: {
    width: 100,
    height: 100
  },
  cartContainer: {
    backgroundColor: '#FFF',
    padding: 10
  },
  cartProductName: {
    letterSpacing: 1,
    fontSize: 14
  },
  cartColorSizeLabel:{
    letterSpacing: 1,
    fontSize: 12,
    color: "#888"
  },
  cartQuantityLabel:{
    letterSpacing: 1,
    fontSize: 12,
    lineHeight: 16,
    color: "#888"
  },
  cartQuantity:{
    letterSpacing: 1,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    lineHeight: 18
  }
});
