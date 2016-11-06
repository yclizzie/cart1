
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  gray: {
    backgroundColor: '#eeeeee',
  },
  addressRow: {
    borderBottomWidth:0.3,
    borderColor: '#D9D5DC'
  },
  pickerRow: {
    justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderColor: '#D9D5DC',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 5,
    paddingLeft: 10
  }
});
