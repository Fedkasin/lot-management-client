import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Text, TextInput,
} from 'react-native';
import actions from '../../actions/index';

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
    textAlign: 'center',
  },
  textInputStyle: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
  },
});

class SettingChildInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { text } = e.nativeEvent;
    const {
      sectionIndex,
      settingIndex,
      settingType,
      name,
      onInputChange,
    } = this.props;

    const data = {
      sectionIndex,
      settingIndex,
      settingType,
      settingName: name,
      value: text,
    };
    onInputChange(data);
  }

  render() {
    const {
      label, name, type, value,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          name={name}
          onEndEditing={this.handleInputChange}
          style={styles.input}
          type={type}
        >
          <Text>{value}</Text>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInputChange: data => dispatch(actions.settingsActions.changeSetting(data)),
  };
}

SettingChildInput.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
  settingIndex: PropTypes.number.isRequired,
  settingType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingChildInput);
