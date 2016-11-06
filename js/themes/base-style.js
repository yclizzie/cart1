import theme from './base-theme';

const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  baseText: {
    color: theme.fontColorBase,
    fontFamily: theme.fontFamily,
    letterSpacing: theme.fontLetterSpacing,
  },
  baseSmallText: {
    fontSize: theme.fontSizeSmallBase
  },
  flexRow: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  baseButton: {
    backgroundColor:'#F57F7F'
  },
  categoryRow: {
    backgroundColor: 'white',
    borderBottomWidth:0
  },
  headerIcon: {
    color: '#5C5C5C'
  },
  headerImg: {
    width:120,
    height:15
  },
  baseFooter: {
    paddingLeft:10,
    paddingRight:10,
    borderTopWidth:0
  },
  loading:{
    transform: [{scale: 1.5}]
  }
});
