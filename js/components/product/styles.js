
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  colorsizeModal: {
    position: 'absolute',
    bottom:0,
    backgroundColor: 'rgba(252, 253, 255,1)'
  },
  productName: {
    marginLeft: 10,
    paddingTop: 10,
    fontSize: 24,
    fontWeight:'400'
  },
  price: {
    color: '#a8a8a8',
    textDecorationLine: 'line-through',
    fontSize:22
  },
  special: {
    color: '#F57F7F',
    letterSpacing:1,
    fontSize:22,
    fontWeight:'600'
  },
  meta_description:{
    fontSize:14,
    lineHeight:20
  },
  textContainer: {
    marginLeft: 10,
    paddingTop:5
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
  selected: {
    backgroundColor: '#F57F7F'
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
