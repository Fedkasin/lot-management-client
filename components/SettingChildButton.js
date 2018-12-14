import React from 'react';
import { View, StyleSheet, SegmentedControlIOS, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flex: 1,
    },
    label: {
        fontFamily: 'sans',
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    }
});

export default class SettingChildButton extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.child.label}</Text>
                <SegmentedControlIOS 
                    values={this.props.child.options}
                    selectedIndex={this.props.child.options.indexOf(this.props.child.value)}>
                </SegmentedControlIOS>
            </View>
        );
    }
}