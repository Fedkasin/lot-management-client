import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
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
    pickerSelectStyle: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    pickerButtonStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white'
    }
});

export default class SettingChildSelect extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.child.label}</Text>
                <RNPickerSelect
                    placeholder={{}}
                    items={this.props.child.options.map(opt => ({ label: opt, value: opt }))}
                    onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}
                    style={styles.pickerSelectStyle}
                    value={this.props.child.value}
                />
            </View>
        );
    }
}