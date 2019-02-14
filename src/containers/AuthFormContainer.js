import React from 'react';

import actions from '../actions/index';
import AuthForm from '../components/auth/AuthForm';

class AuthFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AuthForm navigation={this.props.navigation} />
        );
    }
}

export default AuthFormContainer;