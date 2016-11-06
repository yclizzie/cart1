import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import style from '../../themes/base-style';

class Totals extends Component {

  static propTypes = {
    totals: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  _renderTotalRow(total, i, totals) {
    return (
      <View key={i} style={[style.flexRow, { justifyContent: 'space-between' }]}>
        <Text style={{ paddingTop: 2, textAlign: 'right', color: '#666' }}>{total.title}</Text>
        <Text style={[{ paddingTop: 2, textAlign: 'right', color: '#666' }, i + 1 === totals.length ? { fontWeight: '600' } : {}]}>{total.text}</Text>
      </View>
    );
  }

  render() {
    const { props: { totals } } = this;

    return (
      <View style={{ paddingTop: 10 }}>
        {totals ? totals.map((total, i, self) => this._renderTotalRow(total, i, self)) : <View />}
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    totals: state.cart.totals,
  };
}

export default connect(mapStateToProps, null)(Totals);
