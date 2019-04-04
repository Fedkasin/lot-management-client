/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MonoText from '../core/StyledText';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText style={{ color: 'black' }}>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
