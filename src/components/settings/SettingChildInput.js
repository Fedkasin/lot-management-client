import React from 'react';
import  { connect } from 'react-redux';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import settingsReducers from "../../reducers/settingsReducers";
import actions from "../../actions/index";

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

class SettingChildInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const text = e.nativeEvent.text;
        const data = {
            sectionIndex: this.props.sectionIndex,
            settingIndex: this.props.settingIndex,
            settingType: this.props.settingType,
            settingName: this.props.name,
            value: text
        };
        this.props.onInputChange(data);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    name={this.props.name}
                    onEndEditing={this.handleInputChange}
                    style={styles.textInputStyle}
                    type={this.props.type}
                >
                <Text>{this.props.value}</Text>
                </TextInput>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        sectionIndex: ownProps.sectionIndex,
        settingIndex: ownProps.settingIndex,
        settingType: 'inputs',
        name: state.settingsReducers.settings[ownProps.sectionIndex].children.inputs[ownProps.settingIndex].id,
        parentName: state.settingsReducers.settings[ownProps.sectionIndex].children.inputs[ownProps.settingIndex].parentId,
        label: state.settingsReducers.settings[ownProps.sectionIndex].children.inputs[ownProps.settingIndex].label,
        type: state.settingsReducers.settings[ownProps.sectionIndex].children.inputs[ownProps.settingIndex].type,
        value: state.settingsReducers.settings[ownProps.sectionIndex].children.inputs[ownProps.settingIndex].value,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: (data) => dispatch(actions.settingsActions.changeSetting(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingChildInput);
