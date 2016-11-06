
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
   list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    text: {
    	alignSelf:'center',
        paddingTop:5,
        paddingBottom:3,
    	fontSize: 12
    },
    price: {
        color: '#a8a8a8',
        textDecorationLine: 'line-through',
        fontSize:12
    },
    special: {
        letterSpacing:1,
        fontSize:12,
        fontWeight:'600'
    },
    image: {
    	 alignSelf:'center'
    },
    item: {
        //backgroundColor: '#CCC',
        margin: 1
    }
});
