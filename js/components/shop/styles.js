
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  hidden: {
    width: 0,
    height: 0,
  },
  mt: {
    marginTop: 20,
  },
  badge: {
    position:'absolute',
    top:-5,
    right:-5,
    width:25,
    height:25,
    borderRadius:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e54e78'
  },
  badgeText: {
    color: '#FFF'
  }
});
