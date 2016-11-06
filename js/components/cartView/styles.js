
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  emptyCart: {
    textAlign: 'center',
    color: "#888"
  },
  footer: {
    paddingBottom:95,
    paddingLeft:10,
    paddingRight:10,
    borderTopWidth:0
  },
  buttonText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center'
  },
  closeIcon: {
    fontSize: 20,
    color: '#333',
    position: 'relative',
    top: 0,
    right: 0
  },
  quantityIcon: {
    fontSize: 20,
    color: '#333'
  },
  applyButton: {
    color:'#F57F7F'
  }
});
