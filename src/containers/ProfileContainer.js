import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView, View, ActivityIndicator,
} from 'react-native';

import actions from '../store/actions/index';
import ProfileView from '../components/auth/ProfileView';
import * as Colors from '../constants/Colors';

class ProfileContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchProfile } = this.props;
    fetchProfile();
  }

  handleClick() {
    const { onSignOut } = this.props;
    onSignOut();
  }

  render() {
    const { isLoading, profile, isLogouting } = this.props;

    if (!profile) return <ActivityIndicator size="large" color={Colors.lightGray} />;

    return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <ProfileView
          isLoading={isLoading}
          isLogouting={isLogouting}
          profile={profile}
          onClick={this.handleClick}
        />
        <View style={{ height: 170 }} />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogouting: state.authReducers.isLoading,
    isLoading: state.profileReducers.isLoading,
    profile: state.profileReducers.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: () => dispatch(actions.profileActions.fetchProfile()),
    onSignOut: () => dispatch(actions.authActions.logout()),
  };
}

ProfileContainer.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  isLogouting: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  profile: PropTypes.objectOf(PropTypes.any),
};

ProfileContainer.defaultProps = {
  profile: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
