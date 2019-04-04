/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MonoText from '../core/StyledText';
import * as Colors from '../../constants/Colors';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText style={{ color: Colors.black }}>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
