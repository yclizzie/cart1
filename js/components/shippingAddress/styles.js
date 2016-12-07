
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
  totalRow: {
    justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderColor: '#D9D5DC',
    marginTop:15,
    padding: 5,
    paddingLeft: 10,
  },
  totalTitle:{
    color: "#666",
  },
  totalText: {
   fontWeight:'600',
  },
  footer: {
    paddingBottom:95,
    paddingLeft:10,
    paddingRight:10,
    borderTopWidth:0
  },
});
