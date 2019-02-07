import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    text: {
        fontSize: 28, 
        opacity: .5
    }
});

class BgMessage extends React.Component {

    render() {
        const {text} = this.props
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>{text}</Text>
            </View>
        )
    }

}

export default BgMessage