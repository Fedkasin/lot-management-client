import React from 'react';
import  { connect } from 'react-redux';
import { FlatList } from 'react-native';

import actions from '../actions/index';
import AuthSignOrRegister from '../components/auth/AuthSignOrRegister';

class AuthSignOrRegisterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AuthSignOrRegister navigation={this.props.navigation} />
        );
    }
}

export default AuthSignOrRegisterContainer;
