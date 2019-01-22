import React from 'react';
import  { connect } from 'react-redux';
import { ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';

import SettingSectionItem from '../components/settings/SettingSectionItem';
import actions from '../actions';

class SettingsContainer extends React.Component {
    componentDidMount() {
        this.props.onFetchSettings();

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillUnmount() {
        AsyncStorage.clear();
    }

    async handleInputChange(inputId, parentId, text) {
        try {
            console.log(inputId, parentId, text);
            await AsyncStorage.setItem(`@InputsStore:${inputId}`, text);
        } catch (err) {

        }
    }

    render() {
        if (this.props.isFetching) {
            return <ActivityIndicator></ActivityIndicator>
        } else {
            return (
                <ScrollView>
                    {this.props.settings.map((value, key) => { return <SettingSectionItem handleInputChange={this.handleInputChange} key={key} setting={value} /> })}
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settingsReducers.settings,
        isFetching: state.settingsReducers.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchSettings: () => dispatch(actions.settingsActions.fetchSettings()),
        onConfigSave: () => dispatch(actions.rootActions.setAddr())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
