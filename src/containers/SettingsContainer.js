import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView, ActivityIndicator, AsyncStorage,
} from 'react-native';

import SettingSectionItem from '../components/settings/SettingSectionItem';
import actions from '../store/actions/index';
import { getUser } from '../helpers/authHelpers';
import ProfileView from '../components/auth/ProfileView';

const DEFAULT_ADDR = 'a1a26ef2.ngrok.i';

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
    ];

    onFetchSettings(settingsMock);
  }

  handleClick() {
    const { onSignOut } = this.props;
    onSignOut();
  }

  render() {
    const { isLoading, settings, user } = this.props;

    if (isLoading || !user) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const userName = user.name || user.displayName;
    const userAvatar = user.photoUrl || user.photoURL;

    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <ProfileView
          name={userName}
          avatar={userAvatar}
          onClick={this.handleClick}
        />
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
    user: getUser() || state.authReducers.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchSettings: data => dispatch(actions.settingsActions.fetchSettings(data)),
    onSignOut: () => dispatch(actions.authActions.logout()),
  };
}

SettingsContainer.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onFetchSettings: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
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
