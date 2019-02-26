import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView, ActivityIndicator, AsyncStorage, View, Image, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import SettingSectionItem from '../components/settings/SettingSectionItem';
import actions from '../actions/index';
import { getUser } from '../helpers/authHelpers';

const DEFAULT_ADDR = '0e40c705.ngrok.io';

let user = null;

class SettingsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { onFetchSettings } = this.props;
    let addr = await AsyncStorage.getItem('@InputsStore:Address');
    if (!addr) {
      await AsyncStorage.setItem('@InputStore:Address', DEFAULT_ADDR);
      addr = await AsyncStorage.getItem('@InputStore:Address');
    }

    user = JSON.parse(await AsyncStorage.getItem('@UserStore:USER')) || getUser();
    /* console.log(user); */
    const settingsMock = [
      {
        id: 'Api',
        label: 'Апи',
        children: {
          selects: {
            fromToSelects: [],
            nestedSelects: [],
            singleSelects: [],
          },
          buttons: [],
          checkboxes: [],
          inputs: [
            {
              id: 'Address',
              parentId: 'Api',
              value: addr || '',
              placeholder: 'Address',
              label: 'Адрес',
              type: 'text',
            },
          ],
        },
      },
      {
        id: 'Price',
        label: 'Цена',
        children: {
          selects: {
            fromToSelects: [
              {
                id: 'PriceFrom',
                options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                value: 'Любая',
                label: 'От',
              },
              {
                id: 'PriceTo',
                options: ['Любая', '1000', '2000', '3000', '4000', '5000', '10000'],
                value: 'Любая',
                label: 'До',
              },
            ],
            nestedSelects: [],
            singleSelects: [],
          },
          buttons: [
            {
              id: 'Exchange',
              options: ['BYN', 'USD', 'EUR'],
              value: 'BYN',
              label: 'Валюта',
            },
          ],
          checkboxes: [
            {
              id: 'IsExchangeble',
              options: null,
              value: false,
              label: 'Обмен',
            },
            {
              id: 'WithDiagnostic',
              options: null,
              value: false,
              label: 'С диагностикой',
            },
          ],
          inputs: [],
        },
      },
      {
        id: 'Placeholder',
        label: 'Местонахождение',
        children: {
          selects: {
            fromToSelects: [],
            nestedSelects: [
              {
                id: 'Country',
                options: ['Все страны', 'Беларусь (жыве!)', 'Россия (слава руси!)', 'Украина (слава героям!)', 'Казахстан(уважайте)', 'США (fuck yeah!)'],
                value: 'Все страны',
                label: 'Страна',
              },
              {
                id: 'Region',
                options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                value: 'Все области',
                label: 'Область',
              },
              {
                id: 'Town',
                options: ['Все области', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые', 'Пока все одинаковые'],
                value: 'Все области',
                label: 'Город',
              },
            ],
            singleSelects: [],
          },
          buttons: [],
          checkboxes: [],
          inputs: [],
        },
      },
      {
        id: 'Model',
        label: 'Марка',
        children: {
          selects: {
            fromToSelects: [],
            nestedSelects: [
              {
                id: 'Mark',
                options: ['Все марки', 'Toyota', 'Audi', 'Mercedes', 'BMW', 'Honda', 'VAZ', 'Valve'],
                value: 'Все марки',
                label: '',
              },
              {
                id: 'PriceTo',
                options: ['Все модели', 'Модель1', 'Модель2', 'Модель3', 'Модель4', 'Модель5'],
                value: 'Все модели',
                label: '',
              },
            ],
            singleSelects: [],
          },
          buttons: [],
          checkboxes: [],
          inputs: [],
        },
      },
    ];

    onFetchSettings(settingsMock);
  }

  handleClick() {
    const onSignOut = this.props;
    /* console.log('HEREE'); */
    onSignOut.onSignOut();
  }

  render() {
    const { isLoading, settings } = this.props;
    const styles = StyleSheet.create({
      shadow: {
        width: 110,
        height: 110,
        zIndex: 2,
        borderRadius: 200,
        marginTop: -150,
      },
    });

    if (isLoading || !user) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const userName = user.name || user.displayName;
    const userAvatar = user.photoUrl || user.photoURL;

    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ alignItems: 'center', marginTop: -550, marginBottom: 110 }}>
          <View
            style={{
              zIndex: 1, width: '200%', height: 800, backgroundColor: '#efefef', borderRadius: 100000,
            }}
          />
          <TouchableOpacity onPress={this.handleClick}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
          <Text style={{
            zIndex: 2, fontSize: 24, color: '#131313', marginTop: -80,
          }}
          >
            { userName }
          </Text>
          <View style={styles.shadow}>
            <Image
              source={{ uri: userAvatar }}
              style={{
                width: 100, height: 100, borderRadius: 50, backgroundColor: '#999',
              }}
            />
          </View>
        </View>
        {settings.map((value, key) => (
          <SettingSectionItem
            key={value.id}
            sectionIndex={key}
            setting={value}
          />
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settingsReducers.settings,
    isLoading: state.settingsReducers.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchSettings: data => dispatch(actions.settingsActions.fetchSettings(data)),
    onSignOut: () => dispatch(actions.authActions.logout()),
  };
}

SettingsContainer.propTypes = {
  onFetchSettings: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  settings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    children: PropTypes.shape({
      selects: PropTypes.shape({
        fromToSelects: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string).isRequired,
          value: PropTypes.string,
          label: PropTypes.string.isRequired,
        })),
        nestedSelects: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string).isRequired,
          value: PropTypes.string,
          label: PropTypes.string,
        })),
        singleSelects: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(PropTypes.string).isRequired,
          value: PropTypes.string,
          label: PropTypes.string,
        })),
      }),
      buttons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        value: PropTypes.string,
        label: PropTypes.string.isRequired,
      })),
      checkboxes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string),
        value: PropTypes.bool,
        label: PropTypes.string.isRequired,
      })),
      inputs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })),
    }),
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
