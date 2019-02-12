import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

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

    constructor(props) {
      super(props);
      //this._storeData = this._storeData.bind(this);
    }

    login = async () => {
      this.props.navigation.navigate('AuthFormScreen', {})
    }

    regist = async () => {
      Alert.alert('Sorry, this option is temporary not avalible')
    }

/*     _storeData = async () => {
        try {
          await AsyncStorage.setItem('TASKS', 'I like to save it.');
        } catch (error) {
          // Error saving data
          console.log('error');
        }
    }; 
    
      _removeData = async () => {
        try {
          await AsyncStorage.removeItem('TASKS');
        } catch (error) {
          // Error saving data
          console.log('error');
        }
      }; */

    render() {
      console.log(JSON.stringify(this.props.navigation, null, 2));
        //const {text} = this.props
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

export default AuthSignOrRegister