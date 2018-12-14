import React from 'react';
import  { connect } from 'react-redux';
import { ScrollView, ActivityIndicator } from 'react-native';

import SettingItem from '../components/SettingItem';
import actions from '../actions';

class SettingsContainer extends React.Component {
    componentDidMount() {
        this.props.onFetchSetings();
    }

    render() {
        if (this.props.isFetching) {
            return <ActivityIndicator></ActivityIndicator>
        } else {
            return (
                <ScrollView>
                    {this.props.settings.map((value, key) => {
                        return <SettingItem key={key} setting={value}></SettingItem>;
                    })}
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducers.settings,
        isFetching: state.settingsReducers.isFetching,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        onFetchSetings: () => dispatch(actions.settingsActions.fetchSettings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);