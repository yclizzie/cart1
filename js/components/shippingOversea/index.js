
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Icon, InputGroup, Input } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import { loadCountries, loadZones, onFillAddressForm } from '../../actions/main';
import styles from './styles';
import style from '../../themes/base-style';
import Picker from '../../components/picker';

class ShippingOversea extends Component {

  static propTypes = {
    loadCountries: React.PropTypes.func,
    loadZones: React.PropTypes.func,
    onFillAddressForm: React.PropTypes.func,
    countries: React.PropTypes.arrayOf(React.PropTypes.object),
    zones: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  constructor(props) {
    super(props);

    this.state = {
      countriesOptions: [],
      countriesLabels: [],
      zonesOptions: [],
      zonesLabels: [],
    };
  }

  componentDidMount() {
    this.loadCountries();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.countries !== nextProps.countries) {
      const countriesData = this.getCountriesData(nextProps.countries);
      this.setState({
        countriesOptions: countriesData.countriesOptions,
        countriesLabels: countriesData.countriesLabels,
      });
    }

    if (this.props.zones !== nextProps.zones) {
      const zonesData = this.getZonesData(nextProps.zones);
      this.setState({
        zonesOptions: zonesData.zonesOptions,
        zonesLabels: zonesData.zonesLabels,
      });
    }
  }

  onCountrySelected(option) {
    this.setState({
      selectedCountry: option,
      selectedCountryLabel: this.state.countriesLabels[option],
    });
    this.props.onFillAddressForm('country', this.state.selectedCountry);
    this.loadZones(option);
  }

  onZoneSelected(option) {
    this.setState({
      selectedZone: option,
      selectedZoneLabel: this.state.zonesLabels[option],
    });
    this.props.onFillAddressForm('zone', this.state.selectedZone);
  }

  getZonesData(zones) {
    const zonesOptions = [];
    const zonesLabels = [];

    zones.map((zone) => {
      zonesOptions.push(zone.zone_id);
      zonesLabels.push(zone.name);
    });

    return { zonesOptions, zonesLabels };
  }

  getCountriesData(countries) {
    const countriesOptions = [];
    const countriesLabels = [];

    countries.map((country) => {
      countriesOptions.push(country.country_id);
      countriesLabels.push(country.name);
    });

    return { countriesOptions, countriesLabels };
  }

  loadZones(country_id) {
    this.props.loadZones(country_id);
  }

  loadCountries() {
    this.props.loadCountries();
  }

  showCountryPicker() {
    this.countryInput.show();
  }

  showZonePicker() {
    this.zoneInput.show();
  }

  render() {
    return (
      <View>
        <View style={styles.addressRow}>
          <InputGroup style={{ padding: 10 }}>
            <Input onEndEditing={e => this.props.onFillAddressForm('address', e.nativeEvent.text)} placeholder={I18n.t('text_address')} />
          </InputGroup>
        </View>
        <View style={styles.addressRow}>
          <InputGroup style={{ padding: 10 }}>
            <Input onEndEditing={e => this.props.onFillAddressForm('city', e.nativeEvent.text)} placeholder={I18n.t('text_city')} />
          </InputGroup>
        </View>
        <View style={styles.addressRow}>
          <InputGroup style={{ padding: 10 }}>
            <Input onEndEditing={e => this.props.onFillAddressForm('zipcode', e.nativeEvent.text)} placeholder={I18n.t('text_zipcode')} />
          </InputGroup>
        </View>
        <TouchableOpacity onPress={() => this.showCountryPicker()}>
          <View style={[style.flexRow, styles.pickerRow]}>
            <Text style={{ color: '#575757' }}>{this.state.selectedCountryLabel || 'Country'}</Text>
            <Icon name="ios-arrow-down" style={{ fontSize: 24, color: '#888' }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showZonePicker()}>
          <View style={[style.flexRow, styles.pickerRow]}>
            <Text style={{ color: '#575757' }}>{this.state.selectedZoneLabel || 'Zone'}</Text>
            <Icon name="ios-arrow-down" style={{ fontSize: 24, color: '#888' }} />
          </View>
        </TouchableOpacity>
        <Picker
          ref={(ref) => {
            this.countryInput = ref;
          }}
          options={this.state.countriesOptions}
          labels={this.state.countriesLabels}
          onSubmit={(option) => {
            this.onCountrySelected(option);
          }}
        />
        <Picker
          ref={(ref) => {
            this.zoneInput = ref;
          }}
          options={this.state.zonesOptions}
          labels={this.state.zonesLabels}
          onSubmit={(option) => {
            this.onZoneSelected(option);
          }}
        />
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    loadCountries: () => dispatch(loadCountries()),
    loadZones: country_id => dispatch(loadZones(country_id)),
    onFillAddressForm: (key, value) => dispatch(onFillAddressForm(key, value)),
  };
}

function mapStateToProps(state) {
  return {
    countries: state.main.countries,
    zones: state.main.zones,
  };
}

export default connect(mapStateToProps, bindAction)(ShippingOversea);
