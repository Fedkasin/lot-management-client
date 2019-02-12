import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';

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
    input: {
        height: 35,
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5
    }
});

class AuthForm extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };

/*     "peter@klaven"
    "cityslicka" */

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.bgButton}>
                    <Text style = {styles.text}>E-mail</Text>
                    <TextInput 
                    autoFocus = {true}
                    value = 'peter@klaven'
                    placeholder = 'your e-mail'
                    maxLength = {20}
                    textContentType = 'emailAddress'
                    style = {styles.input} />
                </View>
                <View style = {styles.bgButton}>
                    <Text style = {styles.text}>Password</Text>
                    <TextInput
                    secureTextEntry={true}
                    value = 'cityslicka'
                    placeholder = '8 symbols at least'
                    style = {styles.input} />
                </View>
                <Button title='Log In'  onPress={() => this.props.navigation.navigate('App')} />
            </View>
        )
    }

}

export default AuthForm