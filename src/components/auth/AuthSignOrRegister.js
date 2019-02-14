import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

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
        width: '75%'
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        margin: 20
    }
});

class AuthSignOrRegister extends React.Component {
    login = async () => {
      this.props.navigation.navigate('AuthFormScreen', {})
    }

    regist = async () => {
      Alert.alert('Sorry, this option is temporary not avalible')
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.bgButton}>
                    <Button title='SIGN IN' onPress={ this.login } />
                </View>
                <Text style = {styles.text}>OR</Text>
                <View style = {styles.bgButton}>
                    <Button title='SIGN UP' onPress={ this.regist } />
                </View>
            </View>
        )
    }
}

export default withNavigation(AuthSignOrRegister);