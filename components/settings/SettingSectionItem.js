import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import SettingChildSelect from './SettingChildSelect';
import SettingChildButton from './SettingChildButton';
import SettingChildCheckbox from './SettingChildCheckbox';
import SettingChildInput from './SettingChildInput';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    settingHeader: {
        flex: 1,
    },
    settingHeaderText: {
        fontSize: 32,
        fontFamily: 'sans',
        textAlign: 'center',
        padding: 10
    },
    settingBody: {
        flex: 1,
    },
    settingButtonsContainer: {
        flex: 1,
    },
    settingFromToSelectsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    settingNestedSelectsContainer: {
        flex: 1,
    },
    settingSingleSelectsContainer: {
        flex: 1,
    },
    settingCheckboxesContainer: {
        flex: 1,
    },
});

export default class SettingSectionItem extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Divider style={{ backgroundColor: 'gray' }} />
                <View style={styles.settingHeader}>
                    <Text style={styles.settingHeaderText}>{this.props.setting.label}</Text>
                </View>
                <Divider style={{ backgroundColor: 'gray' }} />
                <View style={styles.settingBody}>

                    <View style={styles.settingButtonsContainer}>
                        {this.props.setting.children.inputs
                        && this.props.setting.children.inputs.map((value, key) => <SettingChildInput handleInputChange={this.props.handleInputChange} key={key} child={value} />)}
                    </View>

                    <View style={styles.settingButtonsContainer}>
                        {this.props.setting.children.buttons
                        && this.props.setting.children.buttons.map((value, key) => <SettingChildButton key={key} child={value} />)}
                    </View>

                    <View style={styles.settingFromToSelectsContainer}>
                        {this.props.setting.children.selects.fromToSelects &&
                        this.props.setting.children.selects.fromToSelects.map((value, key) => <SettingChildSelect key={key} child={value} />)}
                    </View>

                    <View style={styles.settingNestedSelectsContainer}>
                        {this.props.setting.children.selects.nestedSelects &&
                        this.props.setting.children.selects.nestedSelects.map((value, key) => <SettingChildSelect key={key} child={value} />)}
                    </View>

                    <View style={styles.settingSingleSelectsContainer}>
                        {this.props.setting.children.selects.singleSelects &&
                        this.props.setting.children.selects.singleSelects.map((value, key) => <SettingChildSelect key={key} child={value} />)}
                    </View>

                    <View style={styles.settingCheckboxesContainer}>
                        {this.props.setting.children.checkboxes &&
                        this.props.setting.children.checkboxes.map((value, key) => <SettingChildCheckbox key={key} child={value} />)}
                    </View>
                </View>
            </View>
        );
    }
}
