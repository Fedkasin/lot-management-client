import React from 'react';
import  { connect } from 'react-redux';

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

function mapStateToProps(state) {
    return {
        isFetching: state.authReducers.isFetching,
        login: state.authReducers.login,
        password: state.authReducers.password,
        key: state.authReducers.key,
        error: state.authReducers.error ? state.authReducers.error : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchAuthKey: (login, password) => dispatch(actions.authActions.fetchAuthKey({ login, password })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);
//export default AuthFormContainer;