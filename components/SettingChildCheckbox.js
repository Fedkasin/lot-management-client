import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    }
});

export default class SettingChildCheckbox extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <CheckBox
                    containerStyle={styles.checkboxContainer}
                    title={this.props.child.label}
                    checked={this.props.child.value}
                />
            </View>
        );
    }
}