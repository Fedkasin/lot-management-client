import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flex: 1,
    },
    label: {
        flex: 1,
        fontFamily: 'sans',
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    },
    textInputStyle: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    }
});

export default class SettingChildInput extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.child.label}</Text>
                <TextInput
                    name={this.props.child.id}
                    onChangeText={(text) => this.props.handleInputChange(this.props.child.id, this.props.child.parentId, text)}
                    style={styles.textInputStyle}
                    type={this.props.child.type}
                />
            </View>
        );
    }
}
