import React from 'react';

import AuthSignOrRegister from '../components/auth/AuthSignOrRegister';

class AuthSignOrRegisterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AuthSignOrRegister />
        );
    }
}

export default AuthSignOrRegisterContainer;
