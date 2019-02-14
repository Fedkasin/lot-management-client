import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import  { connect } from 'react-redux';
import actions from '../../actions/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    bgButton: {
        textAlign: 'center',
        width: '75%',
        margin: 10
    },
    text: {
        fontSize: 26,
    },
    error: {
        color: '#f00'
    },
    input: {
        height: 35,
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5
    }
});

let login = null;
let password = null;

class AuthForm extends PureComponent {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authKey !== null) this.props.navigation.navigate('App');
    }

    handleClick() {
        this.props.onFetchAuthKey(login, password);
    }

    handleLogin(e) {
        login = e.nativeEvent.text;
    }

    handlePassword(e) {
        password = e.nativeEvent.text;
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.bgButton}>
                    <Text style = {styles.text}>E-mail</Text>
                    <TextInput 
                        autoFocus = {true}
                        onEndEditing={this.handleLogin}
                        placeholder = 'your e-mail'
                        maxLength = {20}
                        textContentType = 'emailAddress'
                        style = {styles.input}>
                        <Text>{this.props.login}</Text>
                    </TextInput>
                </View>
                <View style = {styles.bgButton}>
                <Text style = {styles.text}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        onEndEditing={this.handlePassword}
                        placeholder = '8 symbols at least'
                        style = {styles.input}>
                        <Text>{this.props.password}</Text>
                    </TextInput>
                </View>
                <Text style = {styles.error}>{this.props.error}</Text>
                <Button title='Log In' onPress={this.handleClick} />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.authReducers.isFetching,
        login: state.authReducers.login,
        password: state.authReducers.password,
        authKey: state.authReducers.authKey,
        error: state.authReducers.error ? state.authReducers.error : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchAuthKey: ( login, password ) => dispatch(actions.authActions.fetchAuthKey({ login, password }) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);