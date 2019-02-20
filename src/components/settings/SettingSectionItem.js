import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';

import SettingChildSelect from './SettingChildSelect';
import SettingChildButton from './SettingChildButton';
import SettingChildCheckbox from './SettingChildCheckbox';
import SettingChildInput from './SettingChildInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 24,
  },
  settingHeader: {
    flex: 1,
    height: 45,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingHeaderText: {
    fontSize: 28,
    fontFamily: 'sans',
    textAlign: 'center',
  },
  settingBody: {
    flex: 1,
  },
  settingButtonsContainer: {
    flex: 1,
  },
  settingFromToSelectsContainer: {
    flex: 1,
    flexDirection: 'row',
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

class SettingSectionItem extends React.PureComponent {
  render() {
    const { setting, sectionIndex } = this.props;
    return (
      <View style={styles.container}>
        <Divider style={{ backgroundColor: 'gray' }} />
        <View style={styles.settingHeader}>
          <Text style={styles.settingHeaderText}>{setting.label}</Text>
        </View>
        <Divider style={{ backgroundColor: 'gray' }} />
        <View style={styles.settingBody}>
          <View style={styles.settingButtonsContainer}>
            {setting.children.inputs
                        && setting.children.inputs.map((value, key) => (
                          <SettingChildInput
                            key={value.id}
                            sectionIndex={sectionIndex}
                            settingIndex={key}
                          />
                        ))}
          </View>

          <View style={styles.settingButtonsContainer}>
            {setting.children.buttons
                        && setting.children.buttons.map(value => (
                          <SettingChildButton
                            key={value.id}
                            child={value}
                          />
                        ))}
          </View>

          <View style={styles.settingFromToSelectsContainer}>
            {setting.children.selects.fromToSelects
                        && setting.children.selects.fromToSelects.map(value => <SettingChildSelect key={value.id} child={value} />)}
          </View>

          <View style={styles.settingNestedSelectsContainer}>
            {setting.children.selects.nestedSelects
                        && setting.children.selects.nestedSelects.map(value => <SettingChildSelect key={value.id} child={value} />)}
          </View>

          <View style={styles.settingSingleSelectsContainer}>
            {setting.children.selects.singleSelects
                        && setting.children.selects.singleSelects.map(value => <SettingChildSelect key={value.id} child={value} />)}
          </View>

          <View style={styles.settingCheckboxesContainer}>
            {setting.children.checkboxes
                        && setting.children.checkboxes.map(value => <SettingChildCheckbox key={value.id} child={value} />)}
          </View>
        </View>
      </View>
    );
  }
}

SettingSectionItem.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
  setting: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingSectionItem;
