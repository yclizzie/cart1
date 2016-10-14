
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
   list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
    	alignSelf:'center',
    	fontSize: 10
    },
    image: {
    	 alignSelf:'center',
    	 width: 120,
    	 height: 120
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 150,
        height: 150
    }
});
